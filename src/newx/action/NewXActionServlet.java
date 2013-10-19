package newx.action;

import java.io.IOException;
import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import newx.exception.CommonErrorCode;
import newx.exception.NewXException;
import newx.util.BeanFactory;
import newx.util.MappingCache;

import org.apache.log4j.Logger;

public class NewXActionServlet extends HttpServlet {
	
	private static final Logger log = Logger.getLogger(NewXActionServlet.class);
	private static HashMap<String, INewXAction> actionMap = new HashMap<String, INewXAction>();

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doProcess(request, response);
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doProcess(request, response);
	}
	
	private void doProcess(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String uri = request.getRequestURI();
		uri = uri.substring(uri.indexOf("action"));
		String regEx = "\\w+[/|\\\\]+(\\w+)";
		Pattern p = Pattern.compile(regEx);
		Matcher m = p.matcher(uri);
		String actionName = null;
		if (m.find()) {
			actionName = m.group(1);
		} else {
			throw new NewXException(CommonErrorCode.ACTION_NAME_NOT_FOUND);
		}
		try {
			INewXAction action = null;
			if (actionMap.get(actionName) != null) {
				action = actionMap.get(actionName);
			} else {
				action = BeanFactory.getBean(actionName, INewXAction.class);
				actionMap.put(actionName, action);
			}
			NewXActionMapping mapping = MappingCache.getInstance().getActionMapping(actionName);
			NewXActionForward actionForward = action.execute(mapping, request, response);
			if (actionForward != null) {
				actionForward.forward(request, response);
			}
		} catch (Exception e) {
			throw new NewXException(CommonErrorCode.EXECUTE_ACTION_ERROR, e).setDetail(actionName);
		}
	}
}
