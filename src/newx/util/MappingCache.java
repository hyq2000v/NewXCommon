package newx.util;

import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import newx.action.NewXActionMapping;
import newx.annotation.ContextInitialized;
import newx.annotation.ListenerBean;
import newx.exception.CommonErrorCode;
import newx.exception.NewXException;
import newx.listener.NewXConfiguration;
import newx.project.IProjectInfo;

import org.apache.log4j.Logger;
import org.jdom.Document;
import org.jdom.Element;
import org.jdom.input.SAXBuilder;
import org.springframework.stereotype.Repository;

//@Repository
//@ListenerBean
/**
 * @author huang
 * 不要了
 */
public class MappingCache {
	private static final Logger log = Logger.getLogger(MappingCache.class);
	
	private static MappingCache instance = null;
	private HashMap<String, HashMap<String, String>> mapping = new HashMap<String, HashMap<String,String>>();
	
	private MappingCache() {
	}
	
	public static MappingCache getInstance() {
		if (instance == null) {
			instance = BeanFactory.getBean(MappingCache.class);
		}
		return instance;
	}
	
//	@ContextInitialized
	public void init() {
		Map<String, IProjectInfo> map = BeanFactory.getBeans(IProjectInfo.class);
		for (IProjectInfo info : map.values()) {
			String projectId = info.getProject().getId();
			parseXml(projectId);
		} 
	}
	
	public NewXActionMapping getActionMapping(String actionName) {
		NewXActionMapping map = new NewXActionMapping();
		map.setMap(mapping.get(actionName));
		return map;
	}
	
	private void parseXml(String projectId) {
		InputStream is = NewXConfiguration.getContext().getResourceAsStream("/WEB-INF/config/Mapping" + projectId + ".xml");
		SAXBuilder builder = new SAXBuilder();
		Document doc = null;
		try {
			doc = builder.build(is);
			List<Element> actionList = doc.getRootElement().getChildren("action");
			for (Element elem : actionList) {
				String action = elem.getAttributeValue("path");
				HashMap<String, String> map = null;
				if (mapping.get(action) != null) {
					map = mapping.get(action);
				} else {
					map = new HashMap<String, String>();
					mapping.put(action, map);
				}
				List<Element> forwardList = elem.getChildren("forward");
				for (Element forwardElem : forwardList) {
					map.put(forwardElem.getAttributeValue("name"), forwardElem.getAttributeValue("path"));
				}
			}
			is.close();
		} catch (Exception e) {
			throw new NewXException(CommonErrorCode.PARSE_XML_ERROR, e).setDetail(projectId);
		}
	}
}
