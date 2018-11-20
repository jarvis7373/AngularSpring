package org.pace.service.primary;

import java.util.List;

import org.pace.model.User;
import org.pace.repositories.primary.UserRepoPri;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("userService")
@Transactional("transactionalManagerPri")
public class UserServiceImplPri implements UserServicePri {
	
	 	@Autowired
	    private UserRepoPri userRepoPri;
	 
	 
    public User findById(int id) {
        return userRepoPri.findById(id);
    }
    
    public void saveUser(User user) {
    	userRepoPri.save(user);
    }
    
    public List<User> findAllUsers(){
    	
    	return userRepoPri.findAll();
    	
    }
 

}
