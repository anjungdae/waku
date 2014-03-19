package waku.controls;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import waku.dao.ElementDao;
import waku.vo.JsonResult;

@Controller
@RequestMapping("/jd/pacecounter")
public class ElementControl {

	Logger log = Logger.getLogger(ItemControl.class);

	@Autowired
	ServletContext servletContext;

	@Autowired(required=false)
	ElementDao elementDao;

	@RequestMapping(value="element/list.do", produces="application/json")
	public Object ajaxList() throws Exception {
		try{
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(elementDao.selectList());
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}

	@RequestMapping(value="element/read.do", produces="application/json")
	public Object ajaxHoldRead(int uNo, int iNo) throws Exception {
		try{
			HashMap<String,Integer> sqlparamMap = new HashMap<String,Integer>();
			sqlparamMap.put("uNo", uNo);
			sqlparamMap.put("iNo", iNo);
			
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(elementDao.selectPlur(sqlparamMap));
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
}