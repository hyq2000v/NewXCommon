package newx.action;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class NewXActionForward {

	private String actionType = null;
	
	public void forward(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		if (actionType != null) {
			RequestDispatcher dispatcher = request.getRequestDispatcher(actionType);
			dispatcher.forward(request, response);
		}
	}

	public void setActionType(String actionType) {
		this.actionType = actionType;
	}
}
