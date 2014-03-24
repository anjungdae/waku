package waku.controls;


import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import waku.dao.MyCouponDao;
import waku.vo.JsonResult;

@Controller
@RequestMapping("/mycoupon")
public class MyCouponControl {
Logger log = Logger.getLogger(MyItemControl.class);
	
	@Autowired
	ServletContext servletContext;
	
	@Autowired(required=false)
	MyCouponDao mycouponDao;
	
	@RequestMapping(value="/list.do", produces="application/json")
	public Object ajaxList() throws Exception {
		try{
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(mycouponDao.selectList());
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
	@RequestMapping(value="/mycouponDelete.do", produces="application/json")
	public Object ajaxDelete(int cSerial) throws Exception {
		try{
			mycouponDao.delete(cSerial);
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(mycouponDao.delete(cSerial));
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
	@RequestMapping(value="/ByBarcode.do", produces="application/json")
	public Object ajaxBybarcode(int uNo) throws Exception {
		try{
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(mycouponDao.joinBarcode(uNo));
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	

}
