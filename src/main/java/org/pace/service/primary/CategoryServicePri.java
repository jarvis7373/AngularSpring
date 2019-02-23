package org.pace.service.primary;

import java.util.List;

import org.pace.model.Category;

public interface CategoryServicePri {
	
	 Category findBycategoryId(int id);
	 
	 void saveCategory(Category category);
	 
	 List<Category> findAllCategory();
}