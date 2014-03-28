package waku.controls;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import waku.dao.MyItemDao;
import waku.vo.JsonResult;
import waku.vo.MyItem;

@Controller
@RequestMapping("/jd/pacecounter")
public class MyItemControl {
Logger log = Logger.getLogger(MyItemControl.class);
	
	@Autowired
	ServletContext servletContext;
	
	@Autowired(required=false)
	MyItemDao myItemDao;
	
	@RequestMapping(value="myItem/list.do", produces="application/json")
	public Object ajaxList() throws Exception {
		try{
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(myItemDao.selectList());
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
	@RequestMapping(value="myItem/keepRead.do", produces="application/json")//
	public Object ajaxKeepRead(int uNo) throws Exception {
		try{
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(myItemDao.selectInven(uNo));
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
	@RequestMapping(value="myItem/holdRead.do", produces="application/json")
	public Object ajaxHoldRead(int uNo, int iNo) throws Exception {
		try{
			HashMap<String,Integer> sqlparamMap = new HashMap<String,Integer>();
			sqlparamMap.put("uNo", uNo);
			sqlparamMap.put("iNo", iNo);
			
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(myItemDao.selectOne(sqlparamMap));
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
	@RequestMapping(value="myItem/insert.do", produces="application/json")
	public Object ajaxInsert(MyItem myItem) throws Exception {
		try{
			myItemDao.insert(myItem);
			
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS);
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
	@RequestMapping(value="myItem/update.do", produces="application/json")
	public Object ajaxUpdate(MyItem myItem) throws Exception {
		try{
			myItemDao.update(myItem);
			
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS);
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
}
