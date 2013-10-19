package newx.repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import newx.menu.RightObject;
import newx.util.SysUtil;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;

@Repository
public class SysRightDao extends AbstractDao {

	private static final Logger log = Logger.getLogger(SysRightDao.class);
	int j = 1;
	
	@Autowired
	private SysRightDao(@Qualifier("dataSource") DataSource dataSource){
		super(dataSource);
	}
	
	public ArrayList<RightObject> getTopRight() {
		List<Map<String, Object>> list = this.queryForList("select id, rightname, url, rightsortno, parentid, memo from sys_right where parentid = '0'", new Object[]{});
		ArrayList<RightObject> rs = new ArrayList<RightObject>();
		for (Map<String, Object> map : list) {
			RightObject right = new RightObject();
			right.setId(map.get("id").toString());
			right.setRightname(map.get("rightname").toString());
			right.setUrl(map.get("url").toString());
			right.setRightsortno(map.get("rightsortno").toString());
			right.setParentid(map.get("parentid").toString());
			right.setMemo(map.get("memo").toString());
			rs.add(right);
		}
		return rs;
	}
	
	public ArrayList<RightObject> getAllRight() {
		String sql = "select id, rightname, url, rightsortno, parentid, memo from sys_right";
		List<Map<String, Object>> list = this.queryForList(sql, new Object[]{});
//		List l = this.query(sql, new FieldColumnMapRowMapper(), new Object[]{});
		ArrayList<RightObject> rs = new ArrayList<RightObject>();
		for (Map<String, Object> map : list) {
			RightObject right = new RightObject();
			right.setId(map.get("id").toString());
			right.setRightname(map.get("rightname").toString());
			right.setUrl(map.get("url").toString());
			right.setRightsortno(map.get("rightsortno").toString());
			right.setParentid(map.get("parentid").toString());
			right.setMemo(map.get("memo").toString());
			rs.add(right);
		}
		return rs;
	}
	
	public RightObject getRightById(String rightId) {
		Map<String, Object> map = this.queryForMap("select id, rightname, url, rightsortno, parentid, memo, memo a1, memo a2, memo a4, memo a3 from sys_right where id = ?", new Object[]{rightId});
//		MapSqlParameterSource namedParameters = new MapSqlParameterSource();
//		namedParameters.addValue("id", rightId);
//		Map o = this.queryForObject("select id, rightname, url, rightsortno, parentid, memo, memo a1, memo a2, memo a4, memo a3 from sys_right where id = :id", new FieldColumnMapRowMapper(), namedParameters);
		if (map != null) {
//			HashMap m = new HashMap();
//			System.out.println();
//			m.put("a1", "va1");
//			m.put("a7", "va7");
//			m.put("a3", "va3");
//			m.put("a5", "va5");
//			m.put("a4", "va4");
//			m.put("a6", "va6");
			map.put("a2", "a2_____ppp");
			map.put("a6", "a6_____ppp");
//			for (Iterator<String> it = map.keySet().iterator(); it.hasNext();) {
//				System.out.println("=================>" + it.next());
//			}
			RightObject right = new RightObject();
			right.setId(map.get("id").toString());
			right.setRightname(map.get("rightname").toString());
			right.setUrl(map.get("url").toString());
			right.setRightsortno(map.get("rightsortno").toString());
			right.setParentid(map.get("parentid").toString());
			right.setMemo(map.get("memo").toString());
			return right;
		} else {
			return null;
		}
	}
	
	public int test() {
//		for (int i = 0; i < 10000; i++) {
//			t();
//		}
		return 1;
//		return this.queryForInt("select count(*) from sys_right", new Object[]{});
	}
	
	public void t() {
		try {
			System.out.println("=========111=========(" + (j++) + ")");
			String sql = "select count(*) from sys_right";
			Connection conn = SysUtil.getConnection();
			System.out.println("=========222=========");
			PreparedStatement ps = conn.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
//			rs.getMetaData().getColumnType(column)
			SysUtil.release(rs, ps, conn);
			System.out.println("=========333=========");
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
