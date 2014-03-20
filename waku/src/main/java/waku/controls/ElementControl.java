package waku.controls;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
	public Object ajaxHoldRead(@RequestParam("iNo[]") int[] iNo) throws Exception {
		try{
			List<Integer> arrayiNo = new ArrayList<Integer>();
			
			for(int i = 0; i<iNo.length; i++){
				System.out.println(iNo[i]);
				arrayiNo.add(iNo[i]);
			};
						
			String sql = "";
						
			String element = "ELEMENT";
			
			if(arrayiNo.size() > 0){
				System.out.println("1 => " + arrayiNo.get(0));
				sql += "select * from (select * from " + element + " where I_NO=" + arrayiNo.get(0)+ ") T1";
				System.out.println("1-1 => " + sql);
				if(arrayiNo.size() > 1){
					System.out.println("2 => " + arrayiNo.get(1));
					sql += " inner join (select * from " + element + " where I_NO=" + arrayiNo.get(1) +") T2 using (G_NO)";
					System.out.println("2-1 => " + sql);
					if(arrayiNo.size() > 2){
						System.out.println("2 => " + arrayiNo.get(2));
						sql += " inner join ( select * from " + element + " where I_NO=" + arrayiNo.get(2)+") T3 using (G_NO)";
						System.out.println("3-1 => " + sql);
						if(arrayiNo.size() > 3){
							System.out.println("3 => " + arrayiNo.get(3));
							sql += " inner join ( select * from " + element + " where I_NO=" + arrayiNo.get(3)+") T4 using (G_NO)";
							System.out.println("4-1 => " + sql);
							if(arrayiNo.size() > 5){
								System.out.println("꺼져");
							}
						}
					}
				}
			}
			
			System.out.println("sql total : " + sql);
					
			JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(elementDao.selectPlur(sql));
			System.out.println(jr);
			return jr;
		}catch(Throwable ex){
			return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
		}
	}
}