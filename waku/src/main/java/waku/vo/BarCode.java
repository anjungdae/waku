package waku.vo;

import java.sql.Date;

public class BarCode {
	int cSerial;
	int gNo;
	String cCode;
	boolean cValid;
	
	int cNo;
	String gImage;
	String gTitle;
	String gDesc;
	Date gEdate;
	boolean gValid;
	
	
	public int getcNo() {
		return cNo;
	}
	public BarCode setcNo(int cNo) {
		this.cNo = cNo;
		return this;
	}
	public String getgImage() {
		return gImage;
	}
	public BarCode setgImage(String gImage) {
		this.gImage = gImage;
		return this;
	}
	public String getgTitle() {
		return gTitle;
	}
	public BarCode setgTitle(String gTitle) {
		this.gTitle = gTitle;
		return this;
	}
	public String getgDesc() {
		return gDesc;
	}
	public BarCode setgDesc(String gDesc) {
		this.gDesc = gDesc;
		return this;
	}
	public Date getgEdate() {
		return gEdate;
	}
	public BarCode setgEdate(Date gEdate) {
		this.gEdate = gEdate;
		return this;
	}
	public boolean isgValid() {
		return gValid;
	}
	public BarCode setgValid(boolean gValid) {
		this.gValid = gValid;
		return this;
	}
	
	
	
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

	public boolean getcValid() {
		return cValid;
	}
	public BarCode setcValid(boolean cValid) {
		this.cValid = cValid;
		return this; 
	}
	
	
	
}
