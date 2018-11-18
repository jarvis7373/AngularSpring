package org.pace.service;

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
	 
	 
    public User findByName(String name) {
        return userRepository.findByName(name);
    }
 

}
