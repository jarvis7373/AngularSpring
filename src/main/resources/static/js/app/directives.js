/*app.directive('compile', function($compile, $parse){
    return {
        link: function(scope, element, attr){
            var parsed = $parse(attr.ngBindHtml);
            function getStringValue() {
                return (parsed(scope) || '').toString();
            }

            // Recompile if the template changes
            scope.$watch(getStringValue, function() {
                $compile(element, null, -9999)(scope);  // The -9999 makes it skip directives so that we do not recompile ourselves
            });
        }
    }
});
app.directive('compile',function($compile, $timeout){
    return{
        restrict:'A',
        link: function(scope,elem,attrs){
            $timeout(function(){                
                $compile(elem.contents())(scope);    
            });
        }        
    };
});*/
app.directive('modal', function () {
    return {
        restrict: 'EA',
        scope: {
           
        	name: '=name',
            modalClass: '=modalClass',
            headerClass: '=headerClass',
            headerTitle:'=headerTitle',
            body:'=body',
            closeBtn:'=closeBtn'
           
        },
        template: '<div class="modal fade" id="{{name}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
		   '<div class="modal-dialog {{modalClass}}" role="document">'+
		          '<div class="modal-content">'+
			          '<div class="modal-header" ng-class="headerClass" >'+
			          	'<h5 class="modal-title w-100 font-weight-bold" id="myModalLabel">{{headerTitle}}</h5>'+
			          	'<button ng-if="closeBtn" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
			          '</div>'+
			          '<div  class="modal-body"  ng-transclude ></div>'+
		          '</div>'+
	      '</div>'+
	      '</div>',
	    transclude: true,
        controller: function ($scope) {
        	$scope.name='modal';
        	
        	console.log($scope.headerClass);
        }
    };
});