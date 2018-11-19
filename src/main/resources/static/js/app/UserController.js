'use strict';

angular.module('crudApp').controller('UserController',[ 'UserService', '$scope', function(UserService, $scope) {

			var self = this;
			self.user = {};
			self.users = [];

			self.submit = submit;
			self.getAllUsers = getAllUsers;
			self.createuser = createuser;
			self.reset = reset;
			
			function submit(){
				console.log('Submitting');
				console.log('Saving New User', self.user);
				createuser(self.user);
				
			}
			
			function createuser(user){
				console.log('About to create user');
				UserService.postService('createuser',user)
					.then(
							function(response){
								console.log('User created successfully');
								getAllUsers();
								self.user={};
								$scope.myForm.$setPristine();
							},
							function (errResponse){
								console.log('Error while creating user');
							}
							
					)
				
			}

			function getAllUsers(){
		            return UserService.getAllUsers();
		        }
			
			function createUser(){
				
				return UserService.createUser();
			}

			function reset() {

				self.user = {};
				$scope.myForm.$setPristine(); // reset Form

			}

		}

		]);