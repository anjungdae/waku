package waku.vo;


public class User {
	int uNo;
	String uEmail;
	String uPassword;
	String uWtotal;
	
	public int getuNo() {
		return uNo;
	}
	public User setuNo(int uNo) {
		this.uNo = uNo;
		return this;
	}
	public String getuEmail() {
		return uEmail;
		
	}
	public User setuEmail(String uEmail) {
		this.uEmail = uEmail;
		return this;
	}
	public String getuPassword() {
		return uPassword;
	}
	public User setuPassword(String uPassword) {
		this.uPassword = uPassword;
		return this;
	}
	public String getuWtotal() {
		return uWtotal;
	}
	public User setuWtotal(String uWtotal) {
		this.uWtotal = uWtotal;
		return this;
	}

	
	
	
	
	
	
	
}
