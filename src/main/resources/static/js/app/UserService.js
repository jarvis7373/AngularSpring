'use strict';

angular.module('crudApp').factory('UserService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllUsers: loadAllUsers,
                getAllUsers: getAllUsers,
                postService: postService
               
            };

            return factory;

            function loadAllUsers() {
            	
            	let apiUrl=urls.USER_SERVICE_API+"userlist";
                console.log('Fetching all users');
                var deferred = $q.defer();
                $http.get(apiUrl)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all users');
                            $localStorage.users = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                        	
                            console.error('Error while loading users');
                            $localStorage.users = {};
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllUsers(){
            	
                return $localStorage.users;
            }
            
            function postService(url,data){
            	
            	let apiUrl=urls.USER_SERVICE_API+url;
            	
            	console.log('Post data',data);
            	
            	var deferred=$q.defer();
            	$http.post(apiUrl,data)
            		.then(
            				function (response){
            					loadAllUsers();
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