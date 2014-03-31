package waku.controls;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import waku.dao.PaceDao;
import waku.vo.JsonResult;

@Controller
@RequestMapping("/jd/pacecounter")
public class PaceControl {

	Logger log = Logger.getLogger(PaceControl.class);
	
	@Autowired
	ServletContext servletContext;
	
	@Autowired(required=false)
	PaceDao paceDao;
	
	@RequestMapping(value="pace/userwork.do", produces="application/json")
	public Object ajaxList(int uNo) throws Exception {
		try{
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(paceDao.selectOne(uNo));
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
}