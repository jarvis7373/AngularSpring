
app.directive('compile',function($compile, $timeout){
    return{
        restrict:'A',
        link: function(scope,elem,attrs){
            $timeout(function(){                
                $compile(elem.contents())(scope);    
            });
        }        
    };
});

app.directive('modal', function () {
    return {
        restrict: 'EA',
        scope: {
           
        	name: '=name',
            modalClass: '=modalClass',
            headerClass: '=headerClass',
            headerTitle:'=headerTitle',
            //body:'=body',
            closeBtn:'=closeBtn'
           
        },
        template: '<div class="modal fade" id="{{name}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
		   '<div class="modal-dialog {{modalClass}}" role="document">'+
		          '<div class="modal-content">'+
			          '<div class="modal-header" ng-class="headerClass" >'+
			          	'<h5 class="modal-title w-100 font-weight-bold" id="myModalLabel">{{headerTitle}}</h5>'+
			          	//'<p class="heading w-100 font-weight-bold">{{headerTitle}}</p>'+
			          	'<button ng-if="closeBtn" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
			          '</div>'+
			          '<div  class="modal-body"  ng-transclude ></div>'+
		          '</div>'+
	      '</div>'+
	      '</div>',
	    transclude: true,
        controller: function ($scope) {
        	$scope.name='modal';
        }
    };
});

app.directive('datatable', function () {
    return {
        restrict: 'E, A, C',
        link: function (scope, element, attrs, controller) {

           var dataTable = element.dataTable(scope.options); //init plugin
           var mapToDatatableFormat = function (data) {
            	return data.map(scope.options.columnMap)
            }
            scope.$watch('tabledata', function (newData) {
                if (newData) {
                    dataTable.fnClearTable();
                    dataTable.fnAddData( mapToDatatableFormat(newData) )
                }
            }, true);
            
        },
        scope: { options: "=", tabledata: "=" }
        
    };
});


