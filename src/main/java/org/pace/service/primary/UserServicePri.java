package org.pace.service.primary;

import java.util.List;

import org.pace.model.User;


public interface UserServicePri {
	
	 User findById(int id);
	 
	 void saveUser(User user);
	 
	 List<User> findAllUsers();
}