package org.pace.repositories.secondary;

import org.pace.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepoSec extends JpaRepository <User,Long>{
	
	User findById(int id);

}
