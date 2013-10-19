package newx.util;

import java.util.HashMap;
import java.util.Map;

import newx.exception.CommonErrorCode;
import newx.exception.NewXException;
import newx.listener.NewXConfiguration;

public class BeanFactory {
	
	public static Object getBean(String Name) {
		return NewXConfiguration.getSpringContext().getBean(Name);
	}
	
	public static <T> T getBean(String Name, Class<T> type){
		Object bean = NewXConfiguration.getSpringContext().getBean(Name, type);
		return (T)bean;
	}
	
	public static <T> T getBean(Class<T> type){
		Map map = NewXConfiguration.getSpringContext().getBeansOfType(type);
		if (map.size() == 1) {
			return (T)map.values().iterator().next();
		} else {
			throw new NewXException(CommonErrorCode.BEAN_TYPE_ERROR).setDetail(type.toString());
		}
	}
	
	public static <T> Map<String, T> getBeans(Class<T> type){
		Map<String, T> map = NewXConfiguration.getSpringContext().getBeansOfType(type);
		if (map.size() != 0) {
			return map;
		} else {
			throw new NewXException(CommonErrorCode.BEAN_NOT_FOUND).setDetail(type.toString());
		}
	}
}
