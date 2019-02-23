package org.pace.service.primary;

import java.util.List;

import org.pace.model.Item;

public interface ItemServicePri {
	
	 Item findByitemId(int id);
	 
	 void saveItem(Item item);
	 
	 List<Item> findAllItem();
}