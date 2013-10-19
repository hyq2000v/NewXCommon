package newx.listener;


import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import newx.repository.SysRightDao;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

public class NewXConfiguration implements ServletContextListener {
	
	private static ServletContext context;
	private static WebApplicationContext springContext;
	
	public void contextInitialized(ServletContextEvent evt) {
		context = evt.getServletContext(); 
		springContext = WebApplicationContextUtils.getWebApplicationContext(context);
		try {
			String path = context.getInitParameter("log4jConfigPath");
			InputStream is = context.getResourceAsStream(path);
			Properties p = new Properties();
			p.load(is);
			PropertyConfigurator.configure(p);
			Logger.getLogger(this.getClass()).info("log4j Config success");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public void contextDestroyed(ServletContextEvent evt) {
	}
	
	public static ServletContext getContext() {
		return context;
	}

	public static WebApplicationContext getSpringContext() {
		return springContext;
	}
}