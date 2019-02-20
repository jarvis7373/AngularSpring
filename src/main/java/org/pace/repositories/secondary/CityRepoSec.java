package org.pace.repositories.secondary;

import org.pace.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepoSec extends JpaRepository <City,Long>{
	
	City findBycityId(int id);

}
