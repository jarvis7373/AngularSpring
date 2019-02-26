<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en" ng-app="adminApp">
<head>
        <title>${title}</title>
  		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
  		<link href="css/bootstrap.min.css" rel="stylesheet">
  		<link href="css/mdb.min.css" rel="stylesheet">
 		<link href="css/style.css" rel="stylesheet">
</head>
<body ng-cloak data-ng-controller="homeController as ctrl" >
  
<nav class="navbar navbar-expand-lg navbar-light green darken-2">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">    
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
<!-- 
     <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white font-weight-bold" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Masters
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a ui-sref="category" class="dropdown-item">Category</a></li>
          <li><a ui-sref="item" class="dropdown-item">Item</a></li>
          <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" >Submenu</a>
            <ul class="dropdown-menu">
            
              <li><a class="dropdown-item">Submenu action</a></li>
              <li><a class="dropdown-item">Another submenu action</a></li>

              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" >Subsubmenu</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item">Subsubmenu action</a></li>
                  <li><a class="dropdown-item">Another subsubmenu action</a></li>
                </ul>
              </li>
              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" >Second subsubmenu</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item">Subsubmenu action</a></li>
                  <li><a class="dropdown-item">Another subsubmenu action</a></li>
                </ul>
              </li>

            </ul>
          </li>
        </ul>                
      </li>   -->
      
      <li class="nav-item dropdown" data-ng-repeat="m in globData.menuData" >
        <a data-ng-bind="m.name" class="nav-link dropdown-toggle text-white font-weight-bold" 
           id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li data-ng-repeat="ml in m.menuList" ><a data-ng-bind="ml.name" ui-sref="{{ml.state}}" class="dropdown-item"></a></li>
        </ul>                
      </li>
      
    </ul>
  </div>
</nav>

<div ui-view></div>
  		
<footer class="page-footer font-small blue">
		  <div class="footer-copyright text-center py-1 green darken-2 page-footer">� 2019 Copyright:
		    <a href="#"> Paceautomation.com</a>
		  </div>
</footer>  	
			        
        <script type="text/javascript" src="js/lib/jquery-3.3.1.min.js"></script>
 		<script type="text/javascript" src="js/lib/popper.min.js"></script>
 	 	<script type="text/javascript" src="js/lib/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/lib/mdb.min.js"></script>
        <script type="text/javascript" src="js/lib/angular.min.js" ></script>
        <script type="text/javascript" src="js/lib/angular-ui-router.min.js" ></script>
        <script type="text/javascript" src="js/lib/localforage.min.js" ></script>
        <script type="text/javascript" src="js/lib/ngStorage.min.js"></script>
        <script type="text/javascript" src="js/app/app.js"></script>
        <script type="text/javascript" src="js/app/Service.js"></script>
        <script type="text/javascript" src="js/app/Controller.js"></script>
        <script type="text/javascript" src="js/app/script.js"></script>
    </body>
</html>