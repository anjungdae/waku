package waku.vo;

import java.sql.Date;

public class Goods {
	int gNo;
	int cNo;
	String gImage;
	String gTitle;
	String gDesc;
	Date gEdate;
	boolean gValid;
	
	  String  cName;
	  String   cImage;
	  String     cPage;
	  String   cAd;
	  
		int iNo;
		String iClass;
		String iImage;
		int iReq;
	  

	public String getcName() {
		return cName;
	}
	public Goods setcName(String cName) {
		this.cName = cName;
		return this;
	}
	public String getcImage() {
		return cImage;
	}
	public Goods setcImage(String cImage) {
		this.cImage = cImage;
		return this;
	}
	public String getcPage() {
		return cPage;
	}
	public Goods setcPage(String cPage) {
		this.cPage = cPage;
		return this;
	}
	public String getcAd() {
		return cAd;
	}
	public Goods setcAd(String cAd) {
		this.cAd = cAd;
		return this;
	}

	
	public int getgNo() {
		return gNo;
	}
	public Goods setgNo(int gNo) {
		this.gNo = gNo;
		return this;
	}
	public int getcNo() {
		return cNo;
	}
	public Goods setcNo(int cNo) {
		this.cNo = cNo;
		return this;
	}
	public String getgImage() {
		return gImage;
	}
	public Goods setgImage(String gImage) {
		this.gImage = gImage;
		return this;
	}
	public String getgTitle() {
		return gTitle;
	}
	public Goods setgTitle(String gTitle) {
		this.gTitle = gTitle;
		return this;
	}
	public String getgDesc() {
		return gDesc;
	}
	public Goods setgDesc(String gDesc) {
		this.gDesc = gDesc;
		return this;
	}
	public Date getgEdate() {
		return gEdate;
	}
	public Goods setgEdate(Date gEdate) {
		this.gEdate = gEdate;
		return this;
	}
	public boolean isgValid() {
		return gValid;
	}
	public Goods setgValid(boolean gValid) {
		this.gValid = gValid;
		return this;
	}
	

	
	public int getiNo() {
		return iNo;
	}
	public Goods setiNo(int iNo) {
		this.iNo = iNo;
		return this;
	}
	public String getiClass() {
		return iClass;
	}
	public Goods setiClass(String iClass) {
		this.iClass = iClass;
		return this;
	}
	public String getiImage() {
		return iImage;
	}
	public Goods setiImage(String iImage) {
		this.iImage = iImage;
		return this;
	}
	public int getiReq() {
		return iReq;
	}
	public Goods setiReq(int iReq) {
		this.iReq = iReq;
		return this;
	}
}