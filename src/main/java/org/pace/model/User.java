package org.pace.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "USER")
public class User {

	@Id
	@Column(name = "Id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "User_Name")
	private String userName;
	
	@Column(name = "City_Id")
	private String cityId;


	@ManyToOne
	@JoinColumn(name="City_Id", insertable = false, updatable = false)
	private City city;

	public int getId() {
		return id;
	}

	public String getUsername() {
		return userName;
	}

	public void setUsername(String userName) {
		this.userName = userName;
	}

	public String getCityid() {
		return cityId;
	}

	public void setCityid(String cityId) {
		this.cityId = cityId;
	}
	
	public City getCity() {
		return city;
	}
	

	
	





}
