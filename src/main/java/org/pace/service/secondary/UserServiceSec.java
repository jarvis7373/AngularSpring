package org.pace.service.secondary;

import java.util.List;

import org.pace.model.User;


public interface UserServiceSec {
	
	 User findById(int id);
	 
	 void saveUser(User user);
	 
	 List<User> findAllUsers();
}