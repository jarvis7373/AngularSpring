<div class="container-fluid mt-3">
<div class="card border-success mb-3" >
  <div class="card-header p-0">
  	<div class="row px-2">
  
  		<div class="col-md-6">
  		<h6 class="font-weight-bold mt-3">CATEGORY MASTER</h6>
  		</div>
  		<div class="col-md-6 text-right">
  			<button data-ng-click="ctrl.openModal('CATEGORY ADD',0,0)" type="button" class="btn btn-sm btn-primary" >ADD</button>
			<button type="button" class="btn btn-sm btn-secondary">EXPORT</button>
  		</div>
  		
  	</div>
  </div>
  <div class="card-body p-1">
  
    <div class="panel panel-default">
     
        <div class="panel-body">
            <div class="table-responsive ">
                <table class="table table-sm">
                    <thead>
                    <tr class="green lighten-1">
                        <th class="text-left font-weight-bold">CATEGORY ID</th>
                         <th class="text-left font-weight-bold">CATEGORY NAME</th> 
                         <th class="text-center font-weight-bold">EDIT</th>
                        <th class="text-center font-weight-bold">DELETE</th>                                          
                    </tr>
                    </thead>
                    <tbody>
                    <tr data-ng-repeat="u in ctrl.getLocData('categorylist')">
                        <td class="text-left">{{u.categoryId}}</td>
                        <td class="text-left">{{u.categoryName}}</td>  
                        <td class="text-center" > <button data-ng-click="ctrl.openModal('CATEGORY EDIT',1,u.categoryId)" type="button" class="btn btn-sm btn-warning p-1 m-0"><i class="fas fa-pen"></i></button> </td>
                        <td class="text-center" > <button data-ng-click="ctrl.confirmModal(u.categoryId)" type="button" class="btn btn-sm btn-danger p-1 m-0"><i class="fas fa-trash-alt"></i></button></td>    
                    </tr>
                    </tbody>
                </table>      
            </div>
        </div>
    </div>
    
</div>
</div>


<!--Modal: modalConfirmDelete-->
<div class="modal fade" id="modalConfirm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-sm modal-notify modal-danger" role="document">
    <!--Content-->
    <div class="modal-content text-center">
      <!--Header-->
      <div class="modal-header d-flex justify-content-center">
        <p class="heading">Are you sure?</p>
      </div>

      <!--Body-->
      <div class="modal-body">

        <i class="fas fa-times fa-4x animated rotateIn"></i>

      </div>

      <!--Footer-->
      <div class="modal-footer flex-center">
        <button data-ng-click="ctrl.remove(ctrlData.removeId)" href="" class="btn  btn-outline-danger">Yes</button>
        <button type="button" class="btn  btn-danger waves-effect" data-dismiss="modal">No</button>
      </div>
    </div>
    <!--/.Content-->
  </div>
</div>
<!--Modal: modalConfirmDelete-->

<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="Modal" aria-hidden="true">

  <!-- Change class .modal-sm to change the size of the modal -->
  <div class="modal-dialog modal-lg" role="document">

    <div class="modal-content">
    
      <form  ng-submit="ctrl.submit()" name="dataForm" id="dataForm"  class="form-horizontal">
      
      <div class="modal-header green lighten-1 p-2">
        <h5 class="modal-title w-100 font-weight-bold" id="myModalLabel" data-ng-bind="ctrlData.modalTitle"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            
           <div class="panel-body">
            <div class="formcontainer">
            
                 <div class="row">
                 <div class="col-md-3"></div>
                    <div class="col-md-6">                       
                      <label for="categoryname">Category Name</label>
						<input type="text" ng-model="ctrl.data.categoryName" id="categoryName" class="form-control">
                    </div> 
                    <div class="col-md-3"></div>                   
                 </div>                                                     
            </div>
        </div>   
                
      </div>      
      <div class="modal-footer" ng-if="ctrlData.modalState==0">
        <button ng-disabled="dataForm.$invalid || dataForm.$pristine" type="submit" class="btn btn-primary btn-sm" >SUBMIT</button>
        <button ng-disabled="dataForm.$pristine" ng-click="ctrl.reset()" type="button" class="btn btn-warning btn-sm">RESET</button>
      </div>
      <div class="modal-footer" ng-if="ctrlData.modalState==1">
        <button ng-disabled="dataForm.$invalid || dataForm.$pristine" type="submit" class="btn btn-primary btn-sm" >UPDATE</button>
      </div>
      
        </form>
    </div>
  </div>
</div>