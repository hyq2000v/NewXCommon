package newx.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import newx.exception.NewXException;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.ServletRequestUtils;

@Controller("MainAction")
public class NewXMainAction implements INewXAction {

	private static final Logger log = Logger.getLogger(NewXMainAction.class);
	
	public NewXActionForward execute(NewXActionMapping mapping, HttpServletRequest request, HttpServletResponse response) {
//      iifdf
//		ISecureUser secUser = (ISecureUser) request.getSession(true).getAttribute("secureuser");
//        if (secUser == null) {
//        	log.debug("NO LOGIN!"); 
//            return mapping.findForward("nologin");
//        }
		return mapping.findForward(request);
	}
}
