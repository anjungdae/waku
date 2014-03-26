package waku.vo;

import java.sql.Date;


public class MyCoupon {
	int cSerial;
	int uNo;
	int uPay;
	Date cGdate;
	int cState;
	BarCode barcode;
	
	
	public int getcSerial() {
		return cSerial;
	}
	public MyCoupon setcSerial(int cSerial) {
		this.cSerial = cSerial;
		return this;
	}
	public int getuNo() {
		return uNo;
	}
	public MyCoupon setuNo(int uNo) {
		this.uNo = uNo;
		return this;
	}
	public int getuPay() {
		return uPay;
	}
	public MyCoupon setuPay(int uPay) {
		this.uPay = uPay;
		return this;
	}
	public Date getcGdate() {
		return cGdate;
	}
	public MyCoupon setcGdate(Date cGdate) {
		this.cGdate = cGdate;
		return this;
	}
	public int getcState() {
		return cState;
	}
	public MyCoupon setcState(int cState) {
		this.cState = cState;
		return this;
	}
	
	public BarCode getBarcode() {
		return barcode;
	}
	public MyCoupon setBarCode(BarCode barcode){
		this.barcode = barcode;
		return this;
	}
	
}
