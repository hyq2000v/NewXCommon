package newx.repository;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.ParameterizedRowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class TagDao extends AbstractDao {

	@Autowired
	private TagDao(@Qualifier("dataSource") DataSource dataSource){
		super(dataSource);
	}
	
	public <T> T queryForObject(String sql, ParameterizedRowMapper<T> rm, SqlParameterSource args) {
		try {
			return simpleJdbcTemplate.queryForObject(sql, rm, args);
		} catch (EmptyResultDataAccessException e) {
			return null;
		}
	}
	
	public <T> List<T> query(String sql, ParameterizedRowMapper<T> rm, SqlParameterSource args) {
		try {
			return simpleJdbcTemplate.query(sql, rm, args);
		} catch (EmptyResultDataAccessException e) {
			return null;
		}
	}
}
