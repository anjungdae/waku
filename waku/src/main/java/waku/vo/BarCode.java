package waku.vo;

public class BarCode {
	int cSerial;
	int gNo;
	String cCode;
	boolean cValid;
	Goods goods;
	
	public int getcSerial() {
		return cSerial;
	}
	public BarCode setcSerial(int cSerial) {
		this.cSerial = cSerial;
		return this;
	}
	public int getgNo() {
		return gNo;
	}
	public BarCode setgNo(int gNo) {
		this.gNo = gNo;
		return this;
	}
	public String getcCode() {
		return cCode;
	}
	public BarCode setuPay(String cCode) {
		this.cCode = cCode;
		return this;
	}
	public Goods getGoods() {
		return goods;
	}
	public BarCode setGoods(Goods goods){
		this.goods = goods;
		return this;
	}
	public boolean iscValid() {
		return cValid;
	}
	public BarCode setcValid(boolean cValid) {
		this.cValid = cValid;
		return this; 
	}
	
	
	
}
