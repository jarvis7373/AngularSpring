package org.pace.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.pace.configuration.GlobalVariables;
import org.pace.model.*;
import org.pace.service.primary.*;
import org.pace.service.secondary.*;
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
	CategoryServicePri categoryServicePri;
	
	@Autowired
	CategoryServiceSec categoryServiceSec;
	
	@RequestMapping(value="/categorylist" , method = RequestMethod.GET )
	public List<Category>  category() {
		
		return categoryServicePri.findAllCategory();
	}
	
	@RequestMapping(value="/createcategory" ,  method = RequestMethod.POST)
	public ResponseEntity<?> createCategory( @RequestBody Category category ,UriComponentsBuilder ucBuilder) {
		category.setFlagStatus(0);
		category.setCreatedUsercode(1);		
		logger.info("Creating User	: {} ",category);
		categoryServicePri.saveCategory(category);
		
		if(GlobalVariables.cloudFlag) { categoryServiceSec.saveCategory(category);}
			
		HttpHeaders headers = new HttpHeaders();
	//	headers.setLocation(ucBuilder.path("/api/userlist/{username}").buildAndExpand(user.getUsername()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}
	
	@Autowired
	ItemServicePri itemServicePri;
	
	@Autowired
	ItemServiceSec itemServiceSec;
	
	@RequestMapping(value="/itemlist" , method = RequestMethod.GET )
	public List<Item>  item() {
		
		return itemServicePri.findAllItem();
	}
	
	@RequestMapping(value="/createitem" ,  method = RequestMethod.POST)
	public ResponseEntity<?> createItem( @RequestBody Item item ,UriComponentsBuilder ucBuilder) {
		item.setFlagStatus(0);
		item.setCreatedUsercode(1);	
		logger.info("Creating item	: {} ",item);
		itemServicePri.saveItem(item);
		
		if(GlobalVariables.cloudFlag) { itemServiceSec.saveItem(item);	}
		
		HttpHeaders headers = new HttpHeaders();
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}
		
}
