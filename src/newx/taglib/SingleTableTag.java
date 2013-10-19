package newx.taglib;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.BodyContent;
import javax.servlet.jsp.tagext.BodyTagSupport;

import newx.repository.DACommand;
import newx.repository.MemRecord;
import newx.repository.MemRecordSet;
import newx.taglib.base.IRecordSetOwner;
import newx.taglib.base.RecordProvider;

public class SingleTableTag extends BodyTagSupport implements IRecordSetOwner{

	private MemRecordSet memRecordSet = new MemRecordSet();
	private List<RecordProvider> providerList = new ArrayList<RecordProvider>(); 
	
	private String id = "";
	
	private String title = "";
	
	private String width = "98%";
	
	private String getFromReq = "";
	
	private boolean readOnly = false;
	
	private boolean hasTitle = true;
	
	private String defValues = "";
	
	private boolean display = true;
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getGetFromReq() {
		return getFromReq;
	}

	public void setGetFromReq(String getFromReq) {
		this.getFromReq = getFromReq;
	}

	public boolean isReadOnly() {
		return readOnly;
	}

	public void setReadOnly(boolean readOnly) {
		this.readOnly = readOnly;
	}

	public boolean isHasTitle() {
		return hasTitle;
	}

	public void setHasTitle(boolean hasTitle) {
		this.hasTitle = hasTitle;
	}

	public String getDefValues() {
		return defValues;
	}

	public void setDefValues(String defValues) {
		this.defValues = defValues;
	}

	public boolean isDisplay() {
		return display;
	}

	public void setDisplay(boolean display) {
		this.display = display;
	}

	public String getWidth() {
		return width;
	}

	public void setWidth(String width) {
		this.width = width;
	}

	@Override
	public void addRecordProvider(RecordProvider provider) {
		providerList.add(provider);
	}
	
	public int doStartTag() throws JspException {
		memRecordSet.clear();
		providerList.clear(); 
		return super.doStartTag();
	}
	
	public int doAfterBody() throws JspException {
		DACommand command = new DACommand();
		ServletRequest request = pageContext.getRequest();
		for (RecordProvider provider : providerList) {
			if (provider.getId().indexOf("_dd_") == -1) {
				command.queryForObject(memRecordSet, provider, request);
			} else {
				command.query(memRecordSet, provider, request);
			}
		}
		return SKIP_BODY;
	}
	
	public int doEndTag() throws JspException {
		try {
			JspWriter out = pageContext.getOut();
			writeTitle(out);
			out.println("<div id=\"div_" + id + " style=\"display:" + (display ? "block" : "skip") + "\">");
			out.println("<table class=\"dataTable\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\"  border=0");
			out.println(" align=\"center\" name=\"" + id + "\" id=\"" + id + "\" width=" + width + ">");
			out.println("<tbody>");
			BodyContent bc = getBodyContent();
			out.println(bc.getString());
			out.println("</tbody></table></div>");
			
//			MemRecord record = memRecordSet.firstRecord();
//			if (record != null) {
//				int count = record.getFieldCount();
//				for (int i = 0; i < count; i++) {
//					out.println("<p>" + record.field(i).getValue() + "</p>");
//				}
//			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return EVAL_PAGE;
	}
	
	private void writeTitle(JspWriter out) {
		try {
			out.println("<table class=\"dataTable\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\"  border=\"0\"  width=\"" + width + "\"><tr>");
			out.println("<td nowrap class=\"single_table_title\">");
			out.println("&nbsp;<a href=\"javascript:showTable('img_"
                    + id + "','div_"
                    + id + "')\"><img id=\"img_"
                    + id + "\" src=\""
                    + pageContext.getServletContext().getContextPath()
                    + "/images/dot11.gif\" width=\"9\" height=\"9\"></a>" + title);
			out.println("</td></tr></table>");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
