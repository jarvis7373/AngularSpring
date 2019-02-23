'use strict';

app.controller('homeController',[ 'Service', '$scope', function(Service, scope) {
	
	var self = this;
	scope.ctrlData={};
	
	var menuData=[ 
					{ name:"Masters",
					 menuList:[ 
							{ name:"Category" , state:"category" ,  subMenu :[1] },
							{ name:"Item" , state:"item" , subMenu :[1] } 
						  ] 
					 			
					}, 
					{ name:"Inventry" , 
						menuList:[ 
 							{ name:"Po" , state:"po" , subMenu :[] },
 							{ name:"Grn" , state:"grn" , subMenu :[] } 
 						  ]
								
					} 
					
				  ];
	
	scope.ctrlData.menuData=menuData;
	
	   
}]);

app.controller('categoryController',[ 'Service', '$scope', function(Service, scope) {
	var self = this;
	scope.ctrlData={};
	
	self.data = {};
	self.submit = submit;
	self.getAll = getAll;
	self.create = create;
	self.reset = reset;
	self.openModal=openModal;
	self.closeModal=closeModal;

	function submit(){		
		console.log('Submitting Saving New Category', self.data);
		create(self.data);		
	}
	function create(data){		
		Service.postService('createcategory',data,'categorylist').then(
			function(response){
				console.log('Category created successfully');
				getAll('categorylist');						
				self.data={};
				scope.dataForm.$setPristine();
				self.closeModal();
			},
			function (errResponse){
				console.log('Error while creating category');
			}
		)		
	}
	function getAll(locvar){
		console.log(Service.getAll(locvar));
        return Service.getAll(locvar);
	}		
	function reset() {
		self.data = {};
		scope.dataForm.$setPristine();		
	}
    function openModal(title,state){ 
    	scope.ctrlData.modalTitle=title; 
    	scope.ctrlData.modalState=state;
    	$('#modal').modal({ show	: true, backdrop: 'static', keyboard: false}); 
    	}
    function closeModal(){   $('#modal').modal('hide'); }
   
	
}]);

app.controller('itemController',[ 'Service', '$scope', function(Service, scope) {
	var self = this;
	self.data = {};
	self.submit = submit;
	self.getAll = getAll;
	self.create = create;
	self.reset = reset;
	self.openModal=openModal;
	self.closeModal=closeModal;
	
	
	function submit(){		
		console.log('Submitting Saving New Item', self.data);
		create(self.data);		
	}
	function create(data){		
		Service.postService('createitem',data,'itemlist').then(
			function(response){
				console.log('Item created successfully');
				getAll('itemlist');						
				self.data={};
				scope.dataForm.$setPristine();
				self.closeModal();
			},
			function (errResponse){
				console.log('Error while creating item');
			}					
		)		
	}
	function getAll(locvar){					 
		console.log(Service.getAll(locvar));
        return Service.getAll(locvar);
	}		
	function reset() {
		self.data = {};
		scope.dataForm.$setPristine();
	}
    function openModal(){   $('#modal').modal({ show	: true, backdrop: 'static', keyboard: false}); }
    function closeModal(){   $('#modal').modal('hide'); }
   
}]);