package waku.vo;

public class MyItem {
	int uNo;
	int iNo;
	int iStock;
	String iClass;
	String iName;
	String iImage;
	
	public int getuNo() {
		return uNo;
	}
	public MyItem setuNo(int uNo) {
		this.uNo = uNo;
		return this;
	}
	public int getiNo() {
		return iNo;
	}
	public MyItem setiNo(int iNo) {
		this.iNo = iNo;
		return this;
	}
	public int getiStock() {
		return iStock;
	}
	public MyItem setiStock(int iStock) {
		this.iStock = iStock;
		return this;
	}
	public String getiClass() {
		return iClass;
	}
	public MyItem setiClass(String iClass) {
		this.iClass = iClass;
		return this;
	}
	public String getiName() {
		return iName;
	}
	public MyItem setiName(String iName) {
		this.iName = iName;
		return this;
	}
	public String getiImage() {
		return iImage;
	}
	public MyItem setiImage(String iImage) {
		this.iImage = iImage;
		return this;
	}
}