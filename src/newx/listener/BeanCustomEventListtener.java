package newx.listener;

import java.lang.reflect.Method;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import newx.annotation.ContextInitialized;
import newx.annotation.ListenerBean;
import newx.exception.CommonErrorCode;
import newx.exception.NewXException;

public class BeanCustomEventListtener implements ServletContextListener {
	
	public void contextInitialized(ServletContextEvent evt) {
		Map map = NewXConfiguration.getSpringContext().getBeansOfType(Object.class);
		if (map != null) {
			for (Iterator it = map.values().iterator(); it.hasNext();) {
				Object bean = it.next();
				Class clz = bean.getClass();
				if (clz.isAnnotationPresent(ListenerBean.class)) {
					for (Method method : clz.getDeclaredMethods()) {
						if (method.getAnnotation(ContextInitialized.class) != null) {
							try {
								method.invoke(bean, new Object[]{});
							} catch (Exception e) {
								throw new NewXException(CommonErrorCode.CONTEXTINITIALIZED_EVENT_ERROR, e);
							}
						}
					}
				}
			}
		}
	}

	public void contextDestroyed(ServletContextEvent evt) {
	}
}
