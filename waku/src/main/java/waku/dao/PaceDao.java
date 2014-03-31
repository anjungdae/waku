package waku.dao;

import java.util.List;

import waku.vo.Pace;

public interface PaceDao {
	public List<Pace> selectOne(int uNo) throws Exception;
}
