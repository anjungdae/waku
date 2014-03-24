package waku.dao;
import java.util.List;
import waku.vo.MyCoupon;

public interface MyCouponDao {
	public List<MyCoupon> selectList() throws Exception;
	public List<MyCoupon> delete(int cSerial) throws Exception;
	public List<MyCoupon> joinBarcode(int uNo) throws Exception;
}
