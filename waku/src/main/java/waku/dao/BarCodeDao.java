package waku.dao;
import java.util.List;

import waku.vo.BarCode;

public interface BarCodeDao {
	public List<BarCode> selectList() throws Exception;
	public List<BarCode> selectRead(int gNo) throws Exception;
	public List<BarCode> delete(int cSerial) throws Exception;
	public List<BarCode> ByGoods(int gNo) throws Exception;
	public int updateValid(int changeValid) throws Exception;
}
