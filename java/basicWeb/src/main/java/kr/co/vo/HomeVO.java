package kr.co.vo;

import java.util.Date;

public class HomeVO {
	
	private int bno;
	private String userID;
	private String userName;
	private String sex;
	private String country;
	private String city;
	private Date regdate;
	
	public HomeVO() {
		super();
	}
	
	public HomeVO(int bno, String userID, String userName, String sex, String country, String city, Date regdate) {
		super();
		this.bno = bno;
		this.userID = userID;
		this.userName = userName;
		this.sex = sex;
		this.country = country;
		this.city = city;
		this.regdate = regdate;
	}

	public int getBno() {
		return bno;
	}
	public void setBno(int bno) {
		this.bno = bno;
	}
	public String getUserID() {
		return userID;
	}
	public void setUserID(String userID) {
		this.userID = userID;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public Date getRegdate() {
		return regdate;
	}
	public void setRegdate(Date regdate) {
		this.regdate = regdate;
	}

	@Override
	public String toString() {
		return "HomeVO [userID=" + userID + ", userName=" + userName + ", sex=" + sex + ", country=" + country + ", city="
				+ city + ", regdate=" + regdate + "]";
	}
	
}
