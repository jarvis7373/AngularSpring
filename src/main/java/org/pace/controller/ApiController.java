package org.pace.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.pace.configuration.GlobalVariables;
import org.pace.model.City;
import org.pace.model.User;
import org.pace.service.primary.UserServicePri;
import org.pace.service.primary.CityServicePri;
import org.pace.service.secondary.UserServiceSec;
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
	UserServicePri userServicePri;
	
	@Autowired
	UserServiceSec userServiceSec;
	
	@Autowired
	CityServicePri cityServicePri;
	
	@RequestMapping(value="/userlist" , method = RequestMethod.GET )
	public List<User>  list() {
		
		return userServicePri.findAllUsers();
	}
	
	@RequestMapping(value="/citylist" , method = RequestMethod.GET )
	public List<City>  city() {
		
		return cityServicePri.findAllCity();
	}
	
	@RequestMapping(value="/createuser" ,  method = RequestMethod.POST)
	public ResponseEntity<?> createUser( @RequestBody User user ,UriComponentsBuilder ucBuilder) {
		
		logger.info("Creating User	: {} ",user);
		userServicePri.saveUser(user);
		
		if(GlobalVariables.cloudFlag) {
			
			userServiceSec.saveUser(user);
		}
		
		
		HttpHeaders headers = new HttpHeaders();
	//	headers.setLocation(ucBuilder.path("/api/userlist/{username}").buildAndExpand(user.getUsername()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}
	

}
