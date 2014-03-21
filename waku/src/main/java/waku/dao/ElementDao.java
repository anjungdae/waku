package waku.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import waku.vo.Element;

public interface ElementDao {
	public List<Element> selectList() throws Exception;
	public List<Map<String, Integer>> selectPlur(HashMap<String, Object> sqlmap) throws Exception;
}
