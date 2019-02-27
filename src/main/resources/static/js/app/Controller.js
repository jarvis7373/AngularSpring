'use strict';

app.controller('homeController',[ 'Service','GlobData','$scope', function(Service,GlobData,scope) {
	
	var self = this;
	scope.globData=GlobData;
	scope.ctrlData={};
	
	var menuData=[ 
					{
						name:"Masters",
						menuList:[ 
							{ name:"Category" , state:"category" ,  subMenu :[] },
							{ name:"Item" , state:"item" , subMenu :[] } 
						  ] 
					}, 
					{ 
						name:"Inventry" , 
						menuList:[ 
 							{ name:"Po" , state:"po" , subMenu :[] },
 							{ name:"Grn" , state:"grn" , subMenu :[] } 
 						  ]
					} 
				  ];
	
	
	scope.globData.menuData=menuData;
	
	
}]);

app.controller('categoryController',[ 'Service','GlobData','$scope', function( Service, GlobData, scope ) {
	
	var self = this;
	var ctrlVar="category";
	scope.globData=GlobData;
	scope.ctrlData={};
	
	
	self.data = {};
	self.submit = submit;
	self.getLocData = getLocData;
	self.create = create;
	self.update = update;
	self.remove = remove;
	self.reset = reset;
	self.openModal=openModal;
	self.closeModal=closeModal;
	self.confirmModal=confirmModal;
	
	function log(type,data,data1){
		Service.logService(type,data,data1);
	}
	function getLocData(locvar){
		log(0,locvar,Service.getLocData(locvar));
        return Service.getLocData(locvar);
	}	
	function submit(){	
		if(scope.ctrlData.modalState==0){
			log(0,'Submitting Saving New '+ctrlVar, self.data);
			create(self.data);	
		}else if(scope.ctrlData.modalState==1){
			log(0,'Submitting Update '+ctrlVar, self.data);
			update(self.data);	
		}		
	}
	function create(data){		
		Service.postService('create'+ctrlVar,data,ctrlVar+'list').then(
			function(response){
				log(0,ctrlVar+' created successfully');
				getLocData(ctrlVar+"list");						
				self.data={};
				scope.dataForm.$setPristine();
				self.closeModal('modal');
			},
			function (errResponse){
				log(1,'Error while creating '+ctrlVar);
			}
		)		
	}
	function update(data){		
		Service.putService('update'+ctrlVar+'/'+data.categoryId,data,ctrlVar+'list').then(
			function(response){
				log(0,ctrlVar+' Updated successfully');
				getLocData(ctrlVar+'list');						
				self.data={};
				scope.dataForm.$setPristine();
				self.closeModal('modal');
			},
			function (errResponse){
				log(1,'Error while updating '+ctrlVar);
			}
		)		
	}
	function remove(id){		
		Service.removeService('remove'+ctrlVar+'/'+id,ctrlVar+'list').then(
			function(response){
				log(0,ctrlVar+' Removed successfully');
				getLocData(ctrlVar+'list');						
				self.data={};
				scope.dataForm.$setPristine();
				self.closeModal('modalConfirm');
			},
			function (errResponse){
				log(1,'Error while Removing '+ctrlVar);
			}
		)		
	}
	function reset() {
		self.data = {};
		scope.dataForm.$setPristine();		
	}
	function openModal(title,state,id){ 
	    	if(state==0){
	    		scope.ctrlData.modalTitle=title; 
	        	scope.ctrlData.modalState=state;
	        	self.data={};
	        	$('#modal').modal({ show	: true, backdrop: 'static', keyboard: false});         	
	    	}else if(state==1){
	    		let temp='single'+ctrlVar+'/'+id;
	    	    Service.loadSerData(temp).then(function(){
	    	    	self.data=getLocData(temp);
	        		scope.ctrlData.modalTitle=title; 
	            	scope.ctrlData.modalState=state;
	            	$('#modal').modal({ show	: true, backdrop: 'static', keyboard: false}); 
	    	    }
	    	    
	    	    )
	    	}
	    }
	 function closeModal(name){   $('#'+name).modal('hide'); }
	 
	 function confirmModal(id){ scope.ctrlData.removeId=id; $('#modalConfirm').modal({ show	: true, backdrop: 'static', keyboard: false});  }
   
	
}]);

app.controller('itemController',[ 'Service', '$scope', function(Service, scope) {
	var self = this;
	var ctrlVar="item";
	
	self.data = {};
	self.submit = submit;
	self.getLocData = getLocData;
	self.create = create;
	self.update = update;
	self.reset = reset;
	self.openModal=openModal;
	self.closeModal=closeModal;
	
	
	function log(type,data,data1){
		Service.logService(type,data,data1);
	}
	function getLocData(locvar){
		log(0,locvar,Service.getLocData(locvar));
        return Service.getLocData(locvar);
	}	
	function submit(){	
		if(scope.ctrlData.modalState==0){
			log(0,'Submitting Saving New '+ctrlVar, self.data);
			create(self.data);	
		}else if(scope.ctrlData.modalState==1){
			log(0,'Submitting Update '+ctrlVar, self.data);
			update(self.data);	
		}		
	}
	function create(data){		
		Service.postService('create'+ctrlVar,data,ctrlVar+'list').then(
			function(response){
				log(0,ctrlVar+' created successfully');
				getLocData(ctrlVar+"list");						
				self.data={};
				scope.dataForm.$setPristine();
				self.closeModal('modal');
			},
			function (errResponse){
				log(1,'Error while creating '+ctrlVar);
			}
		)		
	}
	function update(data){		
		Service.putService('update'+ctrlVar+'/'+data.categoryId,data,ctrlVar+'list').then(
			function(response){
				log(0,ctrlVar+' Updated successfully');
				getLocData(ctrlVar+'list');						
				self.data={};
				scope.dataForm.$setPristine();
				self.closeModal('modal');
			},
			function (errResponse){
				log(1,'Error while updating '+ctrlVar);
			}
		)		
	}
	function reset() {
		self.data = {};
		scope.dataForm.$setPristine();
	}
	function openModal(title,state,id){ 
    	if(state==0){
    		scope.ctrlData.modalTitle=title; 
        	scope.ctrlData.modalState=state;
        	self.data={};
        	self.data.categoryId=getLocData('categorylist')[0].categoryId; //selected value set
        	$('#modal').modal({ show	: true, backdrop: 'static', keyboard: false});         	
    	}else if(state==1){
    		let temp='single'+ctrlVar+'/'+id;
    	    Service.loadSerData(temp).then(function(){
    	    	self.data=getLocData(temp);
        		scope.ctrlData.modalTitle=title;  
            	scope.ctrlData.modalState=state;
            	$('#modal').modal({ show	: true, backdrop: 'static', keyboard: false}); 
    	    });
    	}
    }
    function closeModal(name){   $('#'+name).modal('hide'); }
   
}]);