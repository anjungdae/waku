package waku.dao;

import java.util.List;
import java.util.Map;

import waku.vo.Goods;

public interface GoodsDao {
	public List<Goods> goodsInformation(Map<String, Object> goodsMapNumber) throws Exception;
}
