package waku.controls;

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
}

/*
@RequestMapping(value="element/read.do", produces="application/json")
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
		
		Map<String, Object> sqlMapNumber = new HashMap<String, Object>();
		
		//mybatis로 문자와 문자의 크기를 보냄
		sqlMapNumber.put("joinList", joinList);
		sqlMapNumber.put("selectCount",selectCount);
		
		//SQL에서 날라온 반환 값들을 리스트에 넣음
		List<Element> unRefinedNumberList = elementDao.selectPlur(sqlMapNumber);
		List<Goods> unRefinedIndexList = goodsDao.goodsInformation(sqlMapNumber);
		
		
		
		
		for(int i = 0; i<unRefinedIndexList.size();i++){
			System.out.println(unRefinedIndexList.get(i).getgTitle());
		}
		
		List<Element> refinedCombineList = new ArrayList<Element>();
					
		JsonResult jr = new JsonResult().setResultStatus(JsonResult.SUCCESS);
		System.out.println(jr);
		return jr;
	}catch(Throwable ex){
		ex.printStackTrace();
		return new JsonResult().setResultStatus(JsonResult.FAIL).setError(ex.getMessage());
	}
}


//중간 과정중 중간정제전 리스트를 준비함
List<Integer> beMiddleNumberList = new ArrayList<Integer>();

//반환값중 숫자부분을 얻어 중간과정 중간정제전 리스트에 넣음
for(int i = 0; i<unRefinedNumberList.size();i++){
	Element combine = unRefinedNumberList.get(i);
				
	beMiddleNumberList.add(combine.getgNo());
}

//해쉬셋을 써서 중복을 제거, 그다음 중간정제후 리스트에 넣음 
HashSet afMiddleNumberList = new HashSet(beMiddleNumberList);

// 중복 제거된 값을 ArrayList 형태로 다시 생성
ArrayList<Integer> refinedNumberList = new ArrayList<Integer>(afMiddleNumberList);

int indexSize = refinedNumberList.size();

String indexStringNumber = "";

for(int i = 0; i<refinedNumberList.size(); i++){
	indexStringNumber += refinedNumberList.get(i) + ",";
	System.out.println("=>"+indexStringNumber);
};

String indexNumber = indexStringNumber.substring(0,indexStringNumber.length()-1);

Map<String, Object> goodsMapNumber = new HashMap<String, Object>();

*/