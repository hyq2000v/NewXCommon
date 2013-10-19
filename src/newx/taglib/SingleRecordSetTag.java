package newx.taglib;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.BodyTagSupport;

import newx.repository.DACommand;
import newx.repository.MemRecord;
import newx.repository.MemRecordSet;
import newx.taglib.base.IRecordSetOwner;
import newx.taglib.base.RecordProvider;
import newx.util.StringUtil;

public class SingleRecordSetTag extends BodyTagSupport implements IRecordSetOwner{
	
	private MemRecordSet memRecordSet = new MemRecordSet();
	private List<RecordProvider> providerList = new ArrayList<RecordProvider>(); 
	
	private String id = null;
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public SingleRecordSetTag() {
		memRecordSet = new MemRecordSet();
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
			MemRecord record = memRecordSet.firstRecord();
			int count = record.getFieldCount();
			for (int i = 0; i < count; i++) {
				out.println("<p>" + record.field(i).getValue() + "</p>");
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return EVAL_PAGE;
	}
}
