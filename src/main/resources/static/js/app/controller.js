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

app.controller('categoryController',[ '$sce','Service','GlobData','$scope', function($sce, Service, GlobData, scope ) {
	
	var self = this;
	var ctrlName="category";
	scope.globData=GlobData;
	scope.ctrlData={};
	
     //alert(angular.element(formContent).html());
	
	self.data = {};
	self.submit = submit;
	self.getLocData = getLocData;
	self.create = create;
	self.update = update;
	self.remove = remove;
	self.reset = reset;
	self.addModal=addModal;
	self.editModal=editModal;
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
			log(0,'Submitting Saving New '+ctrlName, self.data);
			create(self.data);	
		}else if(scope.ctrlData.modalState==1){
			log(0,'Submitting Update '+ctrlName, self.data);
			update(self.data);	
		}		
	}
	function create(data){		
		Service.postService('create'+ctrlName,data,ctrlName+'list').then(
			function(response){
				log(0,ctrlName+' created successfully');
				getLocData(ctrlName+"list");						
				self.data={};
				scope.dataForm.$setPristine();
				self.closeModal('modal');
			},
			function (errResponse){
				log(1,'Error while creating '+ctrlName);
			}
		)		
	}
	function update(data){		
		Service.putService('update'+ctrlName+'/'+data.categoryId,data,ctrlName+'list').then(
			function(response){
				log(0,ctrlName+' Updated successfully');
				getLocData(ctrlName+'list');						
				self.data={};
				scope.dataForm.$setPristine();
				self.closeModal('modal');
			},
			function (errResponse){
				log(1,'Error while updating '+ctrlName);
			}
		)		
	}
	function remove(id){		
		Service.removeService('remove'+ctrlName+'/'+id,ctrlName+'list').then(
			function(response){
				log(0,ctrlName+' Removed successfully');
				getLocData(ctrlName+'list');						
				self.data={};
				scope.dataForm.$setPristine();
				self.closeModal('modalConfirm');
			},
			function (errResponse){
				log(1,'Error while Removing '+ctrlName);
			}
		)		
	}
	function reset() {
		self.data = {};
		scope.dataForm.$setPristine();		
	}
	function addModal(){
		
		scope.globData.modalClass="modal-lg";
		scope.globData.modalName="modal";
		scope.globData.modalHeaderClass="green lighten-1 p-2";
		scope.globData.modalTitle="CATEGORY ADD";
		scope.globData.modalBody= $sce.trustAsHtml(angular.element(formContent).html());
		scope.globData.modalClose=true;
		scope.globData.modalState=0;
		scope.globData.modalTitle=ctrlName.toUpperCase()+' ADD'; 
		
		self.data={};
		Service.modalService('modal','modal-lg','green lighten-1 p-2',);
	}
	function editModal(id){
		
		let temp='single'+ctrlName+'/'+id;
	    Service.loadSerData(temp).then(function(){
	    	self.data=getLocData(temp);
			scope.ctrlData.modalTitle=ctrlName.toUpperCase()+' EDIT'; 
	    	scope.ctrlData.modalState=1;
	    	$('#'+scope.ctrlData.modalName).modal({show	: true, backdrop: 'static', keyboard: false}); 
	    }
	    )
	}
	function closeModal(){  $('#'+scope.ctrlData.modalName).modal('hide'); }
	 
	function confirmModal(id){ scope.ctrlData.removeId=id; $('#modalConfirm').modal({ show	: true, backdrop: 'static', keyboard: false});  }
   
	
}]);

app.controller('itemController',[ 'Service', '$scope', function(Service, scope) {
	var self = this;
	var ctrlName="item";
	
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
			log(0,'Submitting Saving New '+ctrlName, self.data);
			create(self.data);	
		}else if(scope.ctrlData.modalState==1){
			log(0,'Submitting Update '+ctrlName, self.data);
			update(self.data);	
		}		
	}
	function create(data){		
		Service.postService('create'+ctrlName,data,ctrlName+'list').then(
			function(response){
				log(0,ctrlName+' created successfully');
				getLocData(ctrlName+"list");						
				self.data={};
				scope.dataForm.$setPristine();
				self.closeModal('modal');
			},
			function (errResponse){
				log(1,'Error while creating '+ctrlName);
			}
		)		
	}
	function update(data){		
		Service.putService('update'+ctrlName+'/'+data.categoryId,data,ctrlName+'list').then(
			function(response){
				log(0,ctrlName+' Updated successfully');
				getLocData(ctrlName+'list');						
				self.data={};
				scope.dataForm.$setPristine();
				self.closeModal('modal');
			},
			function (errResponse){
				log(1,'Error while updating '+ctrlName);
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
    		let temp='single'+ctrlName+'/'+id;
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