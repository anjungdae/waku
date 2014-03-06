package waku.vo;

import java.sql.Date;

public class Pace {
	
	int uno;
	int wcount;
	float wcal;
	float wkm;
	int wtimer;
	Date wdate;
		
	public int getUserno() {
		return uno;
	}
	public Pace setUserno(int userno) {
		this.uno = userno;
		return this;
	}
	public int getWcount() {
		return wcount;
	}
	public Pace setWcount(int wcount) {
		this.wcount = wcount;
		return this;
	}
	public float getWcal() {
		return wcal;
	}
	public Pace setWcal(float wcal) {
		this.wcal = wcal;
		return this;
	}
	public float getWkm() {
		return wkm;
	}
	public Pace setWkm(float wkm) {
		this.wkm = wkm;
		return this;
	}
	public int getWtimer() {
		return wtimer;
	}
	public Pace setWtimer(int wtimer) {
		this.wtimer = wtimer;
		return this;
	}
	public Date getWdate() {
		return wdate;
	}
	public Pace setWdate(Date wdate) {
		this.wdate = wdate;
		return this;
	}

}
