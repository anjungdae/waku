package waku.controls;


import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import waku.dao.CompanyDao;
import waku.vo.JsonResult;

@Controller
@RequestMapping("/company")
public class CompanyControl {
Logger log = Logger.getLogger(MyItemControl.class);
	
	@Autowired
	ServletContext servletContext;
	
	@Autowired(required=false)
	CompanyDao comapnydao;
	
	@RequestMapping(value="/list.do", produces="application/json")
	public Object ajaxList() throws Exception {
		try{
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(comapnydao.selectList());
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
	@RequestMapping(value="/companyDelete.do", produces="application/json")
	public Object ajaxDelete(int cNo) throws Exception {
		try{
			comapnydao.delete(cNo);
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(comapnydao.delete(cNo));
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
	

}
