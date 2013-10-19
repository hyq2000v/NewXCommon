package newx.util;

import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import newx.annotation.ContextInitialized;
import newx.annotation.ListenerBean;
import newx.exception.CommonErrorCode;
import newx.exception.NewXException;
import newx.listener.NewXConfiguration;
import newx.project.IProjectInfo;
import newx.repository.SysRightDao;
import newx.taglib.base.ConfSTable;

import org.apache.log4j.Logger;
import org.jdom.Document;
import org.jdom.Element;
import org.jdom.input.SAXBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * 脚本工具类
 * @author huang
 * 
 */
@Repository
@ListenerBean
public class ScriptCache {

	private static final Logger log = Logger.getLogger(ScriptCache.class);
	
	private static HashMap<String, ConfSTable> confSTableMap = new HashMap<String, ConfSTable>();
	
	private static ScriptCache scriptCache = null;
	
	@Autowired
	private SysRightDao sysRightDao;
	
	private ScriptCache() {
	}
	
	public static ScriptCache getInstance() {
		if (scriptCache == null) {
			scriptCache = BeanFactory.getBean(ScriptCache.class);
		}
		return scriptCache;
	}
	
	@ContextInitialized
	public void init() {
		Map<String, IProjectInfo> map = BeanFactory.getBeans(IProjectInfo.class);
		for (IProjectInfo info : map.values()) {
			String projectId = info.getProject().getId();
			parseXml(projectId);
		}
	}
	
	private void parseXml(String projectId) {
		InputStream is = NewXConfiguration.getContext().getResourceAsStream("/WEB-INF/config/Conf" + projectId + ".xml");
		if (is != null) {
			try {
				SAXBuilder builder = new SAXBuilder();
				Document doc = null;
				doc = builder.build(is);
				parseSingleTable(doc);
				is.close();
			} catch (Exception e) {
				throw new NewXException(CommonErrorCode.PARSE_XML_ERROR, e).setDetail(projectId);
			}
		}
	}
	
	private void parseSingleTable(Document doc) {
		List<Element> list = doc.getRootElement().getChildren("stable");
		if (list != null) {
			for (Element elem : list) {
				ConfSTable conf = new ConfSTable();
				conf.readXML(elem);
				confSTableMap.put(conf.getId(), conf);
			}
		}
	}
}