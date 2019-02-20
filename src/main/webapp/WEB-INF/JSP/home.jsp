<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en" ng-app="crudApp">
    <head>
        <title>${title}</title>
  		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
  		<link href="css/bootstrap.min.css" rel="stylesheet">
  		<link href="css/mdb.min.css" rel="stylesheet">
 		<link href="css/style.css" rel="stylesheet">
    </head>
    <body>
    
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Hidden brand</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

   <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" >Submenu</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Submenu action</a></li>
              <li><a class="dropdown-item" href="#">Another submenu action</a></li>


              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" >Subsubmenu</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Subsubmenu action</a></li>
                  <li><a class="dropdown-item" href="#">Another subsubmenu action</a></li>
                </ul>
              </li>
              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" >Second subsubmenu</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Subsubmenu action</a></li>
                  <li><a class="dropdown-item" href="#">Another subsubmenu action</a></li>
                </ul>
              </li>



            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>

  		<div ui-view></div>
        
        <script type="text/javascript" src="js/lib/jquery-3.3.1.min.js"></script>
 		<script type="text/javascript" src="js/lib/popper.min.js"></script>
 	 	<script type="text/javascript" src="js/lib/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/lib/mdb.js"></script>
        
        <script type="text/javascript" src="js/lib/angular.min.js" ></script>
        <script type="text/javascript" src="js/lib/angular-ui-router.min.js" ></script>
        <script type="text/javascript" src="js/lib/localforage.min.js" ></script>
        <script type="text/javascript" src="js/lib/ngStorage.min.js"></script>
        <script type="text/javascript" src="js/app/app.js"></script>
        <script type="text/javascript" src="js/app/UserService.js"></script>
        <script type="text/javascript" src="js/app/UserController.js"></script>
        <script type="text/javascript" src="js/app/script.js"></script>
        
    </body>
</html>