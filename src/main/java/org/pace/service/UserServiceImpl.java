package org.pace.service;

import java.util.List;

import org.pace.model.User;
import org.pace.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService {
	
	 	@Autowired
	    private UserRepository userRepository;
	 
	 
    public User findById(int id) {
        return userRepository.findById(id);
    }
    
    public void saveUser(User user) {
        userRepository.save(user);
    }
    
    public List<User> findAllUsers(){
    	
    	return userRepository.findAll();
    	
    }
 

}
