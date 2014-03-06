package waku.dao;

import java.util.List;
import java.util.Map;

import waku.vo.Item;

public interface ItemDao {
	public List<Item> selectList() throws Exception;
}