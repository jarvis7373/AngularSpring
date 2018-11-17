'use strict';

angular.module('crudApp').controller('UserController',
    ['UserService', '$scope',  function( UserService, $scope) {

        var self = this;
        self.user = {name:"aravind"};
        self.users=[{},{}];

        self.getAllUsers = getAllUsers;
        self.reset=reset;
        

        function getAllUsers(){
            return UserService.getAllUsers();
        }
        
        
        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.user={};
            $scope.myForm.$setPristine(); //reset Form
        }

 

    }


    ]);