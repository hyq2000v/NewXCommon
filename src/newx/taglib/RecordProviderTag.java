package newx.taglib;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.BodyTagSupport;

import newx.taglib.base.IRecordSetOwner;
import newx.taglib.base.RecordProvider;

public class RecordProviderTag extends BodyTagSupport {

	private String id = "";
	
	private String where = "";
	
	private String outParam = "";
	
	private String sql = "";
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getSql() {
		return sql;
	}

	public void setSql(String sql) {
		this.sql = sql;
	}

	public String getWhere() {
		return where;
	}

	public void setWhere(String where) {
		this.where = where;
	}

	public String getOutParam() {
		return outParam;
	}

	public void setOutParam(String outParam) {
		this.outParam = outParam;
	}

	public int doEndTag() throws JspException {
		IRecordSetOwner owner = (IRecordSetOwner)getParent();
		RecordProvider provider = new RecordProvider();
		provider.setId(id);
		provider.setWhere(where);
		provider.setOutParam(outParam);
		provider.setSql(sql);
		owner.addRecordProvider(provider);
		return EVAL_PAGE;
	}
}
