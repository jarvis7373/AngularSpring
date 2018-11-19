package org.pace.service;

import java.util.List;

import org.pace.model.User;


public interface UserService {
	
	 User findById(int id);
	 
	 void saveUser(User user);
	 
	 List<User> findAllUsers();
}