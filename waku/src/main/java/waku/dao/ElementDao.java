package waku.dao;

import java.util.HashMap;
import java.util.List;

import waku.vo.Element;

public interface ElementDao {
	public List<Element> selectList() throws Exception;
	public Element selectPlur(String sql) throws Exception;
}
