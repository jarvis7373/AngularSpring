<div class="generic-container">

    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">List of Users </span></div>
		<div class="panel-body">
			<div class="table-responsive">
		        <table class="table table-hover">
		            <thead>
		            <tr>
		                <th>ID</th>
		                <th>NAME</th>
		                <th>AGE</th>
		                <th>SALARY</th>
		            </tr>
		            </thead>
		            <tbody>
		                 <tr ng-repeat="u in ctrl.users">
			                <td>{{u.id}}</td>
			                <td>{{u.name}}</td>
			                <td>{{u.age}}</td>
			                <td>{{u.salary}}</td>
		           		 </tr>
		       
		            </tbody>
		        </table>		
			</div>
		</div>
    </div>
</div>