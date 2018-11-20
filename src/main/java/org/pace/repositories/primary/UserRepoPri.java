package org.pace.repositories.primary;

import org.pace.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepoPri extends JpaRepository <User,Long>{
	
	User findById(int id);

}
