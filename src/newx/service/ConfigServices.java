package newx.service;

import java.io.InputStream;
import java.util.HashMap;
import java.util.List;

import newx.annotation.ContextInitialized;
import newx.annotation.ListenerBean;
import newx.exception.CommonErrorCode;
import newx.exception.NewXException;
import newx.listener.NewXConfiguration;
import newx.util.BeanFactory;

import org.apache.log4j.Logger;
import org.jdom.Document;
import org.jdom.Element;
import org.jdom.input.SAXBuilder;
import org.springframework.stereotype.Service;

@Service
@ListenerBean
public class ConfigServices {
	
	private static final Logger log = Logger.getLogger(ConfigServices.class);
	private static ConfigServices instance = null;
	
	private boolean debug = false;
	private String title = "Demo";
	
	public boolean isDebug() {
		return debug;
	}

	public void setDebug(boolean debug) {
		this.debug = debug;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	
	public static ConfigServices getInstance() {
		if (instance == null) {
			instance = BeanFactory.getBean(ConfigServices.class);
		}
		return instance;
	}
	
	@ContextInitialized
	public void init() {
		InputStream is = NewXConfiguration.getContext().getResourceAsStream("/WEB-INF/sysconfig.xml");
		SAXBuilder builder = new SAXBuilder();
		Document doc = null;
		try {
			doc = builder.build(is);
			Element elem = doc.getRootElement().getChild("debug");
			String debug = elem.getText();
			if ("true".equalsIgnoreCase(debug)) {
				setDebug(true);
			}
			elem = doc.getRootElement().getChild("systitle");
			setTitle(elem.getText());
			is.close();
		} catch (Exception e) {
			throw new NewXException(CommonErrorCode.PARSE_XML_ERROR, e).setDetail("sysconfig.xml");
		}
	}
}