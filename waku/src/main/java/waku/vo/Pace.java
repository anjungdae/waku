package waku.vo;

public class Pace {
	
	int uNo;
	int wCount;
	
	public int getuNo() {
		return uNo;
	}
	public Pace setuNo(int uNo) {
		this.uNo = uNo;
		return this;
	}
	public int getwCount() {
		return wCount;
	}
	public Pace setwCount(int wCount) {
		this.wCount = wCount;
		return this;
	}
}
