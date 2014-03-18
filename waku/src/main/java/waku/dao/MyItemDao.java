package waku.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import waku.vo.MyItem;

public interface MyItemDao {
	public List<MyItem> selectList() throws Exception;
	public List<MyItem> selectInven(int uNo) throws Exception;
	public MyItem selectOne(HashMap<String, Integer> sqlparamMap) throws Exception;
	public MyItem insert(MyItem myItem) throws Exception;
	public MyItem update(MyItem myItem) throws Exception;
}
