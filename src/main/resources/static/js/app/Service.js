'use strict';

app.factory('Service',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAll: loadAll,
                getAll: getAll,
                postService: postService
               
            };

            return factory;

            function loadAll(url) {
            	
            	let apiUrl=urls.BASE_API+url;
            	console.log(apiUrl);
                console.log('Fetching all'+url);
                var deferred = $q.defer();
                $http.get(apiUrl)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all'+url);
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

            function getAll(locvar){
            	
                return $localStorage[locvar];
            }
            
            function postService(url,data,rurl){
            	
            	let apiUrl=urls.BASE_API+url;
            	console.log(apiUrl);
            	console.log('Post data',data);
            	
            	var deferred=$q.defer();
            	$http.post(apiUrl,data)
            		.then(
            				function (response){
            					loadAll(rurl);
            					deferred.resolve(response.data);
            				},
            				function(errResponse){
            					deferred.reject(errResponse);
            				}	
            		);
            	
            	return deferred.promise;
            	
            }                    

        }
    ]);