var app = angular.module('crudApp',['ui.router','ngStorage']);

app.constant('urls', {
    BASE: 'http://localhost:8080/',
    USER_SERVICE_API : 'http://localhost:8080/api/'
});

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

	
	var content= {	
			
			name: 'content',
            url: '/',
            templateUrl: 'list',
            controller:'UserController',
            controllerAs:'ctrl',
            resolve: {
                users: function ($q, UserService) {
                    console.log('Load all users');
                    var deferred = $q.defer();
                    UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
                    return deferred.promise;
                }
            }
        };
	
	
		$stateProvider.state(content);
	//	$stateProvider.state(view);
        
        $urlRouterProvider.otherwise('/');
        
        
    }]);

