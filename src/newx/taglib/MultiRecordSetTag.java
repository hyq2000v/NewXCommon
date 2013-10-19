package newx.taglib;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.BodyTagSupport;

import newx.exception.CommonErrorCode;
import newx.exception.NewXException;
import newx.repository.DACommand;
import newx.repository.MemRecord;
import newx.repository.MemRecordSet;
import newx.taglib.base.IRecordSetOwner;
import newx.taglib.base.RecordProvider;

public class MultiRecordSetTag extends BodyTagSupport implements IRecordSetOwner{

	private MemRecordSet memRecordSet = new MemRecordSet();
	private List<RecordProvider> providerList = new ArrayList<RecordProvider>();
	
	private String id = null;
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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
		if (providerList.size() != 1) {
			throw new NewXException(CommonErrorCode.MULTI_RECORD_ERROR);
		}
		DACommand command = new DACommand();
		ServletRequest request = pageContext.getRequest();
		command.query(memRecordSet, providerList.get(0), request);
		return SKIP_BODY;
	}
	
	public int doEndTag() throws JspException {
		try {
			JspWriter out = pageContext.getOut();
			int count = memRecordSet.getRowCount();
			MemRecord record = null;
			for (int i = 0; i < count; i++) {
				record = memRecordSet.record(i);
				int s = record.getFieldCount();
				for (int j = 0; j < s; j++) {
					out.println("<b>" + record.field(j).getValue() + "</b>&nbsp;&nbsp;");
				}
				out.println("<p>");
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return EVAL_PAGE;
	}
}
