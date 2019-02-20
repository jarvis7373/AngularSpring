package org.pace.service.primary;

import java.util.List;

import org.pace.model.City;


public interface CityServicePri {
	
	 City findBycityId(int id);
	 
	 List<City> findAllCity();
}