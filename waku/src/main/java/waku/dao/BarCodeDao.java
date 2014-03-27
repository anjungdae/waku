package waku.dao;
import java.util.List;
import waku.vo.MyCoupon;

public interface BarCodeDao {
	public List<MyCoupon> selectList() throws Exception;
	public List<MyCoupon> delete(int cSerial) throws Exception;
	public List<MyCoupon> ByGoods(int gNo) throws Exception;
	public boolean update(int cSerila) throws Exception;
}
