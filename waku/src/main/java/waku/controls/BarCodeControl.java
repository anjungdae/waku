package waku.controls;


import java.util.List;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import waku.dao.BarCodeDao;
import waku.dao.GoodsDao;
import waku.vo.BarCode;
import waku.vo.JsonResult;

@Controller
@RequestMapping("/barcode")
public class BarCodeControl {
Logger log = Logger.getLogger(MyItemControl.class);
	
	@Autowired
	ServletContext servletContext;
	
	@Autowired(required=false)
	BarCodeDao barcodeDao;
	
	@Autowired(required=false)
	GoodsDao goodsDao;
	
	@RequestMapping(value="barCode/list.do", produces="application/json")
	public Object ajaxList() throws Exception {
		try{
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(barcodeDao.selectList());
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
	@RequestMapping(value="barCode/read.do", produces="application/json")
	public Object ajaxRead(int gNo) throws Exception {
		try{
			List<BarCode> bacodeList = barcodeDao.selectRead(gNo);
			
			BarCode bacodeListGet = null;
			
			if(bacodeList.size() != 0){
				bacodeListGet  = bacodeList.get(0);
			} else if (bacodeList.size() == 0){
				goodsDao.soldOutGno(gNo);
			}
			
			int changeValid = bacodeList.get(0).getcSerial();
			
			barcodeDao.updateValid(changeValid);
			
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(bacodeListGet);
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
	@RequestMapping(value="/barcodeDelete.do", produces="application/json")
	public Object ajaxDelete(int cSerial) throws Exception {
		try{
			barcodeDao.delete(cSerial);
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(barcodeDao.delete(cSerial));
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
	@RequestMapping(value="/joinGoods.do", produces="application/json")
	public Object ajaxBybarcode(int gNo) throws Exception {
		try{
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(barcodeDao.ByGoods(gNo));
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
}
