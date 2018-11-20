package org.pace.service.secondary;

import java.util.List;

import org.pace.model.User;
import org.pace.repositories.secondary.UserRepoSec;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("userServiceSec")
@Transactional("transactionalManagerSec")
public class UserServiceImplSec implements UserServiceSec {
	
	 	@Autowired
	    private UserRepoSec userRepoSec;
	 
	 
    public User findById(int id) {
        return userRepoSec.findById(id);
    }
    
    public void saveUser(User user) {
    	userRepoSec.save(user);
    }
    
    public List<User> findAllUsers(){
    	
    	return userRepoSec.findAll();
    	
    }
 

}
