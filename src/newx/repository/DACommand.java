package newx.repository;

import java.util.Enumeration;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletRequest;

import newx.taglib.base.RecordProvider;
import newx.util.BeanFactory;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;

/**
 * <strong>DACommand</strong>全名是Data Access Command，数据访问命令
 * @author huang
 */
public class DACommand {

	private TagDao tagDao = null;
	
	public DACommand() {
		tagDao = BeanFactory.getBean(TagDao.class);
	}
	
	public void queryForObject(MemRecordSet recordSet, RecordProvider provider, ServletRequest request) {
		String sql = provider.getFinalSql();
		String where = provider.getWhere();
		MapSqlParameterSource paramMap = getParamMap(request);
		Map data = tagDao.queryForObject(sql + " " + where, new FieldColumnMapRowMapper(), paramMap);
		recordSet.populate(provider.getId(), data);
	}
	
	public void query(MemRecordSet recordSet, RecordProvider provider, ServletRequest request) {
		String sql = provider.getFinalSql();
		String where = provider.getWhere();
		MapSqlParameterSource paramMap = getParamMap(request);
		List<Map> list = tagDao.query(sql + " " + where, new FieldColumnMapRowMapper(), paramMap);
		recordSet.populate(provider.getId(), list);
	}
	
	private MapSqlParameterSource getParamMap(ServletRequest request) {
		MapSqlParameterSource paramMap = new MapSqlParameterSource();
		Enumeration enumer = request.getParameterNames();
		Object paramName = null;
		while (enumer.hasMoreElements()) {
			paramName = enumer.nextElement();
			paramMap.addValue(paramName.toString(), request.getParameter(paramName.toString()));
		}
		return paramMap;
	}
}
