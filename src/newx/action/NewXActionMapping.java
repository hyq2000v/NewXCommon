package newx.action;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

public class NewXActionMapping {
	
	private HashMap<String, String> map = new HashMap<String, String>();

	public void setMap(HashMap<String, String> map) {
		this.map = map;
	}
	
	public NewXActionForward findForward(HttpServletRequest request, String paramName) {
		return findForward(request.getParameter(paramName));
	}
	
	public NewXActionForward findForward(HttpServletRequest request) {
		return findForward(request.getParameter("actionType"));
	}
	
	public NewXActionForward findForward(String actionType) {
		NewXActionForward forward = new NewXActionForward();
		if (map.get(actionType) != null) {
			forward.setActionType(map.get(actionType));
		} else {
			forward.setActionType("/err.jsp");
		}
		return forward;
	}
}
