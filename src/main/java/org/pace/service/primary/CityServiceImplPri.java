package org.pace.service.primary;

import java.util.List;

import org.pace.model.City;
import org.pace.repositories.primary.CityRepoPri;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("cityService")
@Transactional("transactionalManagerPri")
public class CityServiceImplPri implements CityServicePri {
	
	 	@Autowired
	    private CityRepoPri cityRepoPri;
	 
	 
    public City findBycityId(int id) {
        return cityRepoPri.findBycityId(id);
    }
    
    public void saveUser(City user) {
    	cityRepoPri.save(user);
    }
    
    public List<City> findAllCity(){
    	
    	return cityRepoPri.findAll();
    	
    }
 

}
