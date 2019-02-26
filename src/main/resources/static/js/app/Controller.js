'use strict';

app.controller('homeController',[ 'Service','GlobData','$scope', function(Service,GlobData,scope) {
	
	var self = this;
	scope.globData=GlobData;
	
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
	var ctrlData={};
	
	scope.globData=GlobData;
	
	
	self.data = {};
	self.submit = submit;
	self.getLocData = getLocData;
	self.create = create;
	self.update = update;
	self.reset = reset;
	self.openModal=openModal;
	self.closeModal=closeModal;

	function submit(){	
		if(scope.ctrlData.modalState==0){
			console.log('Submitting Saving New Category', self.data);
			create(self.data);	
		}else if(scope.ctrlData.modalState==1){
			console.log('Submitting Upadte Category', self.data);
			update(self.data);	
		}		
	}
	function create(data){		
		Service.postService('createcategory',data,'categorylist').then(
			function(response){
				console.log('Category created successfully');
				getLocData('categorylist');						
				self.data={};
				scope.dataForm.$setPristine();
				self.closeModal();
			},
			function (errResponse){
				console.log('Error while creating category');
			}
		)		
	}
	function update(data){		
		Service.putService('updatecategory/'+data.categoryId,data,'categorylist').then(
			function(response){
				console.log('Category Updated successfully');
				getLocData('categorylist');						
				self.data={};
				scope.dataForm.$setPristine();
				self.closeModal();
			},
			function (errResponse){
				console.log('Error while updating category');
			}
		)		
	}
	function getLocData(locvar){
		console.log(Service.getLocData(locvar));
        return Service.getLocData(locvar);
	}		
	function reset() {
		self.data = {};
		scope.dataForm.$setPristine();		
	}
    function openModal(title,state,id){ 
    	 Service.openModal('modal',title,state,'singleCategory',id); 
    }
    function closeModal(modalName){   Service.closeModal(modalName); }
   
	
}]);

app.controller('itemController',[ 'Service', '$scope', function(Service, scope) {
	var self = this;
	self.data = {};
	self.submit = submit;
	self.getLocData = getLocData;
	self.create = create;
	self.update = update;
	self.reset = reset;
	self.openModal=openModal;
	self.closeModal=closeModal;
	
	
	function submit(){	
		if(scope.ctrlData.modalState==0){
			console.log('Submitting Saving New Item', self.data);
			create(self.data);	
		}else if(scope.ctrlData.modalState==1){
			console.log('Submitting Update Item', self.data);
			update(self.data);	
		}		
	}
	function create(data){		
		Service.postService('createitem',data,'itemlist').then(
			function(response){
				console.log('Item created successfully');
				getLocData('itemlist');						
				self.data={};
				scope.dataForm.$setPristine();
				self.closeModal();
			},
			function (errResponse){
				console.log('Error while creating item');
			}					
		)		
	}
	function update(data){		
		Service.putService('updateitem/'+data.itemId,data,'itemlist').then(
			function(response){
				console.log('Item Updated successfully');
				getLocData('itemlist');						
				self.data={};
				scope.dataForm.$setPristine();
				self.closeModal();
			},
			function (errResponse){
				console.log('Error while updating item');
			}
		)		
	}
	function getLocData(locvar){					 
		console.log(Service.getLocData(locvar));
        return Service.getLocData(locvar);
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
        	self.data.categoryId=getLocData('categorylist')[0].categoryId;
        	$('#modal').modal({ show	: true, backdrop: 'static', keyboard: false});         	
    	}else if(state==1){
    		let temp='singleitem/'+id;
    	    Service.loadSerData(temp).then(function(){
    	    	self.data=getLocData(temp);
        		scope.ctrlData.modalTitle=title; 
            	scope.ctrlData.modalState=state;
            	$('#modal').modal({ show	: true, backdrop: 'static', keyboard: false}); 
    	    });
    	}
    }
    function closeModal(){   $('#modal').modal('hide'); }
   
}]);