package waku.controls;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import waku.dao.GoodsDao;
import waku.vo.JsonResult;

@Controller
@RequestMapping("/goods")
public class GoodsControl {

	Logger log = Logger.getLogger(ItemControl.class);

	@Autowired
	ServletContext servletContext;
	
	@Autowired(required=false)
	GoodsDao goodsDao;
	
	@RequestMapping(value="goods/read.do", produces="application/json")
	public Object ajaxHoldRead(@RequestParam("iNo[]") int[] iNo) throws Exception {
		try{
			// 숫자 리스트를 준비함
			List<Integer> arrayiNoCount = new ArrayList<Integer>();
			
			//숫자가 문자로 들어갈 공간을 준비함
			String arrayiNo = "";
			
			//파라미터로 넘어온 숫자들을 리스트로 집어 넣고 문자로 변환함
			for(int i = 0; i<iNo.length; i++){
				arrayiNoCount.add(iNo[i]);
				arrayiNo += iNo[i] + ",";
			};
			
			//문자로 들어간 arrayiNo에서 맨뒤에 , 를 뺌
			String joinList = arrayiNo.substring(0,arrayiNo.length()-1);
			
			//문자리스트의 크기를 구함
			int selectCount = arrayiNoCount.size();
			System.out.println(selectCount);
			
			Map<String, Object> sqlMapNumber = new HashMap<String, Object>();
			
			//mybatis로 문자와 문자의 크기를 보냄
			sqlMapNumber.put("joinList", joinList);
			sqlMapNumber.put("selectCount",selectCount);
			
			System.out.println(goodsDao.goodsInformation(sqlMapNumber).size());
			
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(goodsDao.goodsInformation(sqlMapNumber));
			System.out.println(jr);
			return jr;
		}catch(Throwable ex){
			ex.printStackTrace();
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
	
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
