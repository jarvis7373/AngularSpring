package org.pace.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class BaseController {
	
	
	@RequestMapping( value = "/home" , method = RequestMethod.GET)
	public String home(ModelMap model) {
		
		model.addAttribute("title", "Angular");
		return "home";
	}
	
	@RequestMapping( value = "/home1" , method = RequestMethod.GET)
	public String home1(ModelMap model) {
		
		model.addAttribute("title", "Angular");
		return "home-multi";
	}
	
	@RequestMapping( value = "/home2" , method = RequestMethod.GET)
	public String home2(ModelMap model) {
		
		model.addAttribute("title", "Angular");
		return "home-multi2";
	}
	
	
	@RequestMapping( value = "/list" , method = RequestMethod.GET)
	public String list() {
		
		return "list";
	}
	


}
