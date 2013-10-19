package newx.structs;

import java.util.Map;

import javax.servlet.ServletException;

import org.apache.log4j.Logger;

import newx.project.IProjectInfo;
import newx.util.BeanFactory;
import newx.util.MappingCache;

public class ActionServlet extends org.apache.struts.action.ActionServlet {

	private static final Logger log = Logger.getLogger(ActionServlet.class);
	
	protected void initOther() throws ServletException {
		super.initOther();
		Map<String, IProjectInfo> map = BeanFactory.getBeans(IProjectInfo.class);
		if (map != null) {
			for (IProjectInfo info : map.values()) {
				log.info("加载模块:" + info.getProject().getName() + "(" + info.getProject().getId() + ")");
				this.config += "," + "/WEB-INF/struts-config-" + info.getProject().getId().toLowerCase() + ".xml";
			}
		}
	}
}
