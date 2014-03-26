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
	

	Company company;
	
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

	
	public Company getCompany() {
		return company;
	}
	public Goods setComapny(Company company) {
		this.company = company;
		return this;
	}
	
	
}
