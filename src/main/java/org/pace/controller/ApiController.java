package org.pace.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ApiController {
	
	@RequestMapping(value="/api/" , method = RequestMethod.GET)
	@ResponseBody
	public String list() {
		
		return "{}";
	}
	

}
