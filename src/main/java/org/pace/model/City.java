package org.pace.model;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "CITY")
public class City {

	@Id
	@Column(name = "City_Id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cityId;

	@Column(name = "City_Name")
	private String cityName;
	
	@OneToMany(mappedBy="City_Id")
	private Collection<User> user;


	public int getCityId() {
		return cityId;
	}

	
	public String getCityName() {
		return cityName;
	}

	public void setUsername(String cityName) {
		this.cityName = cityName;
	}
	




}
