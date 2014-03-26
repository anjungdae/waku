package waku.controls;
import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import waku.dao.GoodsDao;
import waku.vo.JsonResult;
123
@Controller
@RequestMapping("/goods")
public class GoodsControl {

	Logger log = Logger.getLogger(ItemControl.class);

	@Autowired
	ServletContext servletContext;
	
	@Autowired(required=false)
	GoodsDao goodsDao;
	
	@RequestMapping(value="/list.do", produces="application/json")
	public Object ajaxList() throws Exception {
		try{
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(goodsDao.selectList());
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	

	@RequestMapping(value="/joinCompany.do", produces="application/json")
	public Object ajaxjoinCompany(int cNo) throws Exception {
		try{
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(goodsDao.ByCompany(cNo));
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
	@RequestMapping(value="/goodsDelete.do", produces="application/json")
	public Object ajaxDelete(int gNo) throws Exception {
		try{
			goodsDao.delete(gNo);
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(goodsDao.delete(gNo));
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
	


}
