package waku.controls;


import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import waku.dao.UserDao;
import waku.vo.User;
import waku.vo.JsonResult;

@Controller
@RequestMapping("/user")
public class UserControl {
Logger log = Logger.getLogger(UserControl.class);
	
	@Autowired
	ServletContext servletContext;
	
	@Autowired(required=false)
	UserDao userDao;

	@RequestMapping(value="/signUp.do",method=RequestMethod.POST, produces="application/json")
	public Object ajaxInsert(User user) throws Exception {
		try{
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(userDao.insert(user));
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
	@RequestMapping(value="/login.do",method=RequestMethod.POST, produces="application/json")
	public Object ajaxLogin(String uEmail,String uPassword) throws Exception {
		try{
			// email and password 를 넣기위한 map 생성
			HashMap<String,String> sqlparamMap = new HashMap<String,String>();
			sqlparamMap.put("uEmail", uEmail);
			sqlparamMap.put("uPassword", uPassword);

			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(userDao.login(sqlparamMap));
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
	
	@RequestMapping(value="/chkByUser.do", produces="application/json")
	public Object ajaxCheckedEmail(String uEmail) throws Exception {
		try{
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(userDao.chkByUser(uEmail));
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
	@RequestMapping(value="/delete.do", produces="application/json")
	public Object ajaxDelete(int uNo) throws Exception {
		try{
			userDao.delete(uNo);
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(userDao.delete(uNo));
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
	@RequestMapping(value="/selectuNo.do",method=RequestMethod.POST, produces="application/json")
	public Object ajaxselectuNo(String uEmail) throws Exception {
		try{
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(userDao.selectuNo(uEmail));
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
	
	
}
