package org.pace.repositories.primary;

import org.pace.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepoPri extends JpaRepository <City,Long>{
	
	City findBycityId(int id);

}
