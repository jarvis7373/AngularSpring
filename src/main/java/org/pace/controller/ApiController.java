package org.pace.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.pace.model.User;
import org.pace.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping(value="/api")
public class ApiController {
	
	 public static final Logger logger = LoggerFactory.getLogger(ApiController.class);
	
	@Autowired
	UserService userService;
	
	@RequestMapping(value="/userlist" , method = RequestMethod.GET)
	public List<User>  list() {
		
		return userService.findAllUsers();
	}
	
	@RequestMapping(value="/createuser" ,  method = RequestMethod.POST)
	public ResponseEntity<?> createUser( @RequestBody User user ,UriComponentsBuilder ucBuilder) {
		
		logger.info("Creating User	: {} ",user);
		userService.saveUser(user);
		
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/userlist/{username}").buildAndExpand(user.getUsername()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}
	

}
