'use strict';

app.factory('GlobData', function() {  
	return {};
});

app.factory('Service',['$localStorage', '$http', '$q', 'urls', 'GlobData',
        function ($localStorage, $http, $q, urls, GlobData) {

            var factory = {
                loadSerData: loadSerData,
                setLocData : setLocData,
                getLocData : getLocData,
                postService: postService,
                putService : putService,   
                openModal  : openModal,
                closeModal : closeModal
                
            };
            
            return factory;
         
            function loadSerData(url) {
            	
            	let apiUrl=urls.BASE_API+url;
            	console.log(apiUrl);
                console.log('Fetching all'+url);
                var deferred = $q.defer();
                $http.get(apiUrl)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all '+url);
                            $localStorage[url] = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                        	
                            console.error('Error while loading users');
                            $localStorage[url] = {};
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            
            function setLocData(locvar,locdata){
            	
            	 console.log('Setting local data');
            	 console.log(locdata);
                 $localStorage[locvar]=locdata;
            }

            function getLocData(locvar){
            	
                return $localStorage[locvar];
            }
            
            function postService(url,data,rurl){
            	
            	let apiUrl=urls.BASE_API+url;
            	console.log(apiUrl);
            	console.log('Post data',data);
            	
            	var deferred=$q.defer();
            	$http.post(apiUrl,data)
            		.then(function (response){
            					loadSerData(rurl);
            					deferred.resolve(response.data);
            				},
            				function(errResponse){
            					deferred.reject(errResponse);
            				}	
            		);
            	return deferred.promise;
            }  
            
            function putService(url,data,rurl){
            	
            	let apiUrl=urls.BASE_API+url;
            	console.log(apiUrl);
            	console.log('Put data',data);
            	
            	var deferred=$q.defer();
            	$http.put(apiUrl,data)
            		.then(function (response){
            					loadSerData(rurl);
            					deferred.resolve(response.data);
            				},
            				function(errResponse){
            					deferred.reject(errResponse);
            				}	
            		);
            	return deferred.promise;
            }             
            
        }
    
	    function openModal(modalName,title,state,url,id){
	    	
	    	if(state==0){
	    		GlobData.modalTitle=title; 
	        	GlobData.modalState=state;
	        	self.data={};
	        	$('#'+modalName).modal({ show	: true, backdrop: 'static', keyboard: false});         	
	    	}else if(state==1){
	    		let temp=url'/'+id;
	    	    Service.loadSerData(temp).then(function(){
	    	    	self.data=getLocData(temp);
	        		GlobData.modalTitle=title; 
	            	GlobData.modalState=state;
	            	$('#'+modalName).modal({ show	: true, backdrop: 'static', keyboard: false}); 
	    	    });
	    	}
	    }
	    
	    function closeModal(modalName){   $('#'+modalName).modal('hide'); }
    
    
    ]);

