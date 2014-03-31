package waku.dao;
import java.util.List;
import java.util.Map;

import waku.vo.User;



public interface UserDao {
	public List<User> selectList() throws Exception;
	public List<User> insert(User user) throws Exception;//회원가입하기
	public UserDao login(Map<String,String> parammap) throws Exception;//로그인하기
	public List<User> chkByUser(String uEmail) throws Exception;//이메일 중복체크(이메일로 중복체크하기)
	public List<User> delete(int uNo) throws Exception;
	public List<User> selectuNo(String uEmail) throws Exception;
}
