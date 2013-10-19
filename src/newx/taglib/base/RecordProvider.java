package newx.taglib.base;

import newx.util.StringUtil;

public class RecordProvider {
	
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

	public String getSql() {
		return sql;
	}

	public void setSql(String sql) {
		this.sql = sql;
	}
	
	public String getFinalSql() {
		if (StringUtil.isNullOrEmpty(sql)) {
			return "select * from sys_right limit 1";
		} else {
			return sql;
		}
	}
}
