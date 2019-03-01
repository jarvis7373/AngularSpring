app.directive('modal', function () {
    return {
        restrict: 'EA',
        scope: {
        	name: '=name',
            modalClass: '=modalClass',
            header: '=header',
            headerClass: '=headerClass',
            headerTitle:'=headerTitle',
            body:'=body',
            closeBtn:'=closeBtn'
           
        },
        template: '<div class="modal fade" id="{{name}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
		   '<div class="modal-dialog {{modalClass}}" role="document">'+
		          '<div class="modal-content">'+
			          '<div class="modal-header {{headerClass}}" >'+
			          	'<h5 class="modal-title w-100 font-weight-bold" id="myModalLabel">{{headerTitle}}</h5>'+
			          	'<button ng-if="closeBtn" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
			          '</div>'+
			          '<div class="modal-body" ng-bind-html="body"></div>'+
		          '</div>'+
	      '</div>'+
	      '</div>',
        transclude: true,
        controller: function ($scope) {
            $scope.name = 'modal'; 
            $scope.modalClass = ''; 
            $scope.header = ''; 
            $scope.headerClass = ''; 
            $scope.headerTitle = ''; 
            $scope.body = ''; 
            $scope.closeBtn = true; 
            
        },
    };
});