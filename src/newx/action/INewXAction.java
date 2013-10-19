package newx.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import newx.exception.NewXException;

import org.springframework.web.bind.ServletRequestBindingException;

/**
 * @author huang
 * 业务层接口
 */
public interface INewXAction {
	
	public NewXActionForward execute(NewXActionMapping mapping, HttpServletRequest request, HttpServletResponse response) throws Exception;

}
