package waku.controls;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import waku.dao.ItemDao;
import waku.vo.JsonResult;

@Controller
@RequestMapping("/jd/pacecounter")
public class ItemControl {

	Logger log = Logger.getLogger(ItemControl.class);
	
	@Autowired
	ServletContext servletContext;
	
	@Autowired(required=false)
	ItemDao itemDao;
	
	@RequestMapping(value="/list.do", produces="application/json")
	public Object ajaxList() throws Exception {
		
		try{
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(itemDao.selectList());
			System.out.println(jr);
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
}
