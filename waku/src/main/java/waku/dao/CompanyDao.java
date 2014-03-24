package waku.dao;
import java.util.List;
import waku.vo.MyCoupon;

public interface CompanyDao {
	public List<MyCoupon> selectList() throws Exception;
	public List<MyCoupon> delete(int cNo) throws Exception;
}
