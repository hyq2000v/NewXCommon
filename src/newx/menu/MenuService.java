package newx.menu;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Vector;

import newx.repository.SysRightDao;
import newx.util.BeanFactory;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MenuService {

	private static final Logger log = Logger.getLogger(MenuService.class);
	private static MenuService instance = null;

	@Autowired
	private SysRightDao sysRightDao;

	private MenuService() {
	}

	public static MenuService getInstance() {
		if (instance == null) {
			instance = BeanFactory.getBean(MenuService.class);
		}
		return instance;
	}

	public String getTopMenu() {
		List<RightObject> topMenus = sysRightDao.getTopRight();
		StringBuffer sb = new StringBuffer();
		StringBuffer arrSB = new StringBuffer(
				"<script type=\"text/javascript\">\n" + "var ids = new Array("
						+ topMenus.size() + ");\n");
		for (int i = 0; i < topMenus.size(); i++) {
			RightObject mo = (RightObject) topMenus.get(i);
			sb.append("<TD class=\"topover\" id=\"" + mo.getId() + "\"");
			if (i > 4)
				sb.append(" style=display:none");
			sb.append("><A " + mo.getUrl() + " >\n");
			sb.append(mo.getRightname() + "</A></TD>\n");
			arrSB.append("ids[" + i + "] = \"" + mo.getId() + "\";\n");
		}
		arrSB.append("</script>\n");

		sb.append(arrSB);
		return sb.toString();
	}

	public String get2LvlMenu() {
		StringBuffer sb = new StringBuffer();
		List<RightObject> topMenus = sysRightDao.getTopRight();
		for (int i = 0; i < topMenus.size(); i++) {//
			RightObject pmo = (RightObject) topMenus.get(i);
			String parentId = pmo.getId();
			String parentName = pmo.getRightname();

			Vector lvl2Menus = getLowerLvlMenu(parentId);
			sb.append(getOneTopChildrenStartStr(parentId, parentName));
			for (int j = 0; j < lvl2Menus.size(); j++) {
				RightObject mo = (RightObject) lvl2Menus.get(j);
				String id = mo.getId();
				String menuName = mo.getRightname();
				sb.append(get2LvlStartStr(id, menuName));
				String lvl3Str = get3LvlMenu(mo.getId());
				if (lvl3Str != null)
					sb.append(lvl3Str);
			}
			sb.append(getOneTopChildrenEndStr(parentName));
		}
		return sb.toString();
	}

	private String getOneTopChildrenStartStr(String parentId, String parentName) {
		StringBuffer sb = new StringBuffer("<!--start of topmenu " + parentName
				+ "'s lvl2 and lvl3 menus-->\n " + "<div name=\"TOP\" id=\""
				+ parentId + "\" style=\"display:none\">\n");
		sb.append("<table style=\"background-repeat: repeat-y;background-position: right top;\" border=0  cellspacing=0 cellpadding=0 width=100%>\n");
		return sb.toString();
	}

	private String getOneTopChildrenEndStr(String parentName) {

		return "<!--end of topmenu " + parentName
				+ "'s lvl2 and lvl3 menus-->\n  </table>\n</div>\n";
	}

	private String get2LvlStartStr(String menuId, String menuName) {
		StringBuffer sb = new StringBuffer();

		sb.append("	<tr class='Item' >\n");
		sb.append("      <td align=\"center\"> <div id = " + menuId
				+ " name=Parent>\n");
		sb.append("          <table width=\"100%\" onClick = \"expandIt('"
				+ menuId
				+ "');return false\" class=\"menubutton1\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n");
		sb.append("        <tr>\n");
		sb.append("        <td style=\"padding-top: 3px;\" align=\"center\">"
				+ menuName + "</td>\n");
		sb.append("      </tr>\n");
		sb.append("    </table>\n");
		sb.append("  </div></td>\n");
		sb.append("</tr>\n\n");

		sb.append("<tr> \n");
		sb.append("  <td height='10px'></td>\n");
		sb.append("</tr>\n");

		return sb.toString();
	}

	private String get3LvlMenu(String parentID) {
		StringBuffer sb = new StringBuffer();
		Vector lvl3Menus = this.getLowerLvlMenu(parentID);
		sb.append(get3LvlStartStr(parentID));
		for (int j = 0; j < lvl3Menus.size(); j++) {// ��ÿһ��3���˵�ѭ��
			RightObject mo = (RightObject) lvl3Menus.get(j);
			String url = mo.getUrl();
			String name = mo.getRightname();
			sb.append(get3LvlBodyStr(url, name));
		}
		sb.append(get3LvlEndStr());
		return sb.toString();
	}

	private String get3LvlStartStr(String lvl2Id) {
		StringBuffer sb = new StringBuffer();
		sb.append("<tr>\n");
		sb.append("  <td><div id = '" + lvl2Id
				+ "' name='Child' style='display:none'>\n");
		sb.append("      <table width=100% border=0 align=\"left\" cellpadding=2 cellspacing=0 bordercolor=#ffffff class='memufont' style='border-collapse:collapse'>\n");

		return sb.toString();
	}

	private String get3LvlBodyStr(String url, String menuName) {
		StringBuffer sb = new StringBuffer();
		sb.append("    <tr>\n");
		sb.append("    <td class=lefticon></td>\n");
		sb.append("    <td align=\"left\"><a " + url + " class=\"left1\">"
				+ menuName + "</a></td>\n");
		sb.append("  </tr>\n");
		return sb.toString();
	}

	private String get3LvlEndStr() {
		return "</table>\n        </div></td>\n    </tr>";
	}

	private Vector getLowerLvlMenu(String parentId) {
		List<RightObject> menus = sysRightDao.getAllRight();
		Vector rtn = new Vector();
		for (int i = 0; i < menus.size(); i++) {
			RightObject mo = (RightObject) menus.get(i);
			if (mo.getId() != null
					&& mo.getParentid().equalsIgnoreCase(parentId)) {
				rtn.add(mo);
			}
		}
		sortVector(rtn);
		return rtn;
	}

	public void sortVector(Vector src) {
		RightComparator cpr = new RightComparator();
		Collections.sort(src, cpr);
	}
}

class RightComparator implements Comparator {

	public RightComparator() {
	}

	public int compare(Object o1, Object o2) {
		RightObject ro1 = (RightObject) o1;
		RightObject ro2 = (RightObject) o2;
		String str1 = ro1.getRightsortno();
		String str2 = ro2.getRightsortno();
		int s1 = 0, s2 = 0;
		try {
			s1 = Integer.parseInt(str1);
			s2 = Integer.parseInt(str2);
		} catch (NumberFormatException e) {
			return str1.compareTo(str2);
		}
		int ri = 0;
		if (s1 > s2) {
			return 1;
		} else if (s1 < s2) {
			return -1;
		} else {
			return 0;
		}
	}

	public boolean equals(Object obj) {
		throw new java.lang.UnsupportedOperationException(
				"Method equals() not yet implemented.");
	}
}
