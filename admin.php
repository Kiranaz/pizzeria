<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="js/featherlight.min.js" async></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
	<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
	<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="style2.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nothing+You+Could+Do|Poor+Story|Dekko|Permenant+Marker|Fredericka+the+Great|Londrina+Sketch|Hanalei|Sedgwick+Ave+Display|Rock+Salt|Cabin+Sketch|Nanum+Pen+Script|Sacramento|Cookies|Satisfy|Dancing+Script|Pacifico|Oregano|Jua">
	<link href="https://fonts.googleapis.com/css?family=Oleo+Script:400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Teko:400,700" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


<script type="text/javascript" src="logics.js"></script>
<title>Admin</title>
<body>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#" onclick="closeNav(); Add_Product_Div('getpagesnames')">Add Item</a>
  <div class="hr"><hr /></div>

  <!-- <a href="#">Edit Item</a>
  <div class="hr"><hr /></div>

  <a href="#">Delete Item</a> -->
</div>

<div id="tomove">
<span style="font-size:30px; cursor:pointer; color: white; margin-top: -50px; top: -15px; position: relative;" onclick="openNav()">&#9776;</span>

<div class="main">

                        <ul class="mainnav">
                            
                            <li class="hassubs"><div id="Filter_text">Filter</div>
                                <ul id="myDropdown" class="dropdown">
                                    <li class="subs hassubs">User
                                        <ul class="dropdown" id="p1">
                                            <li class="subs" onclick="on_searchType_click(this); change_filtername(this)">Name</li>
                                            <li class="subs" onclick="on_searchType_click(this); change_filtername(this)">Phone</li>
                                            <li class="subs" onclick="on_searchType_click(this); change_filtername(this)">Email</li>
                                            <li class="subs" onclick="on_searchType_click(this); change_filtername(this)">Address</li>
                                        </ul>
                                    </li>
                                   
                                    <li class="subs hassubs">Product
                                        <ul class="dropdown" id="p2">
                                            <li class="subs" onclick="on_searchType_click(this); change_filtername(this)">Product Name</li>
                                            <li class="subs" onclick="on_searchType_click(this); change_filtername(this)">Product ID</li>
                                          
                                        </ul>
                                    </li>
                                  
								                </ul>								
                            </li>
								        </ul>
                        
                            <div class="search-container">
    <form action="/action_page.php">
      <input id="searchquery" type="text" placeholder="Search.." name="search">
    </form>
    <button  type="submit" onclick="adminsearch()"><i class="fa fa-search"></i></button>

  </div>
                        <br style="clear: both;">
                        <span style="font-size:30px; cursor:pointer; color: white; margin-top: -50px; top: -77px; left:1295px;height: 30px; position: relative;"><img id="logo_img"  src="Assets/logoadmin.png"></span>

                        
                    </div>
            
                   

            
            
<div id="searchresultbodydiv" class="container">


</div>
            
</div>
</body>
</html>

<script>
// hide the menu when an exmple is clicked
$(".subs").on("click", function(){
    $(".dropdown").hide(); 
});

    // show hide the menu when examples is clicked
   $(".hassubs").on("click", function () {
  $(".dropdown").toggle();
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("tomove").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("tomove").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}
    </script>
