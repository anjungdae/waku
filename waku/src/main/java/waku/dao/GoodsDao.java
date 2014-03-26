package waku.dao;

import java.util.List;

import waku.vo.Goods;

public interface GoodsDao {
	//public List<Goods> goodsInformation(Map<String, Object> goodsMapNumber) throws Exception;
	public List<Goods> ByCompany(int cNo) throws Exception;
	public List<Goods> delete(int gNo) throws Exception;
	public List<Goods> selectList() throws Exception;
}
