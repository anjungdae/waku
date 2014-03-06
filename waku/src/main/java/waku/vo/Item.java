package waku.vo;

import java.sql.Date;

public class Item {
	int iNo;
	String iName;
	String iImage;
	String iClass;
	int iPrice;
	Date iSdate;
	
	public int getiNo() {
		return iNo;
	}
	public Item setiNo(int iNo) {
		this.iNo = iNo;
		return this;
	}
	public String getiName() {
		return iName;
	}
	public Item setiName(String iName) {
		this.iName = iName;
		return this;
	}
	public String getiImage() {
		return iImage;
	}
	public Item setiImage(String iImage) {
		this.iImage = iImage;
		return this;
	}
	public String getiClass() {
		return iClass;
	}
	public Item setiClass(String iClass) {
		this.iClass = iClass;
		return this;
	}
	public int getiPrice() {
		return iPrice;
	}
	public Item setiPrice(int iPrice) {
		this.iPrice = iPrice;
		return this;
	}
	public Date getiSdate() {
		return iSdate;
	}
	public Item setiSdate(Date iSdate) {
		this.iSdate = iSdate;
		return this;
	}
}
