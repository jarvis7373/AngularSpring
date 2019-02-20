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
 		<style type="text/css">
 		
 		
 		.dropdown-submenu {
  position: relative;
}

.dropdown-submenu a::after {
  transform: rotate(-90deg);
  position: absolute;
  right: 6px;
  top: .8em;
}

.dropdown-submenu .dropdown-menu {
  top: 0;
  left: 100%;
  margin-left: .1rem;
  margin-right: .1rem;
}
 		</style>
    </head>
    <body>
    
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">HIDDEN</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

   <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" >Action</a></li>
          <li><a class="dropdown-item" >Another action</a></li>
          <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" >Submenu</a>
            <ul class="dropdown-menu">
            
              <li><a class="dropdown-item" >Submenu action</a></li>
              <li><a class="dropdown-item" >Another submenu action</a></li>

              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" >Subsubmenu</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" >Subsubmenu action</a></li>
                  <li><a class="dropdown-item" >Another subsubmenu action</a></li>
                </ul>
              </li>
              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" >Second subsubmenu</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" >Subsubmenu action</a></li>
                  <li><a class="dropdown-item" >Another subsubmenu action</a></li>
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
        <script type="text/javascript">
        
        $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
      	  if (!$(this).next().hasClass('show')) {
      	    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      	  }
      	  var $subMenu = $(this).next(".dropdown-menu");
      	  $subMenu.toggleClass('show');


      	  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      	    $('.dropdown-submenu .show').removeClass("show");
      	  });


      	  return false;
      	});
        </script>
        
    </body>
</html>