<html>
    <head>
            <script type="text/javascript" src="logics.js"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  



        <style>
          .main{width: 100%;
            height: 50px; background: #000;}
/*General Menu Styling*/
.mainnav{margin: 0 auto}
li{list-style: none;}
li a{text-decoration: none;}
.dropdown{position: absolute; width: 150px;top: 41px; opacity: 0;visibility: hidden;transition: ease-out .35s;-moz-transition: ease-out .35s;-webkit-transition: ease-out .35s;}
.mainnav li{float: left;margin-top: 8px; margin-left: 500px; padding: 5px;background: maroon;border-left: 1px dotted #fff;}
.mainnav li:first-child{border: none;}
.mainnav li a{ display: block;padding: 2px 20px;color: #fff;font-family: arial;}
.mainnav li:hover{background: #fff;transition: ease-in .35s;-moz-transition: ease-in .35s;-webkit-transition: ease-in .35s;}
.mainnav li:hover a{color: maroon;transition: ease-in .35s;-moz-transition: ease-in .35s;-webkit-transition: ease-in .35s;}
/*First Level*/
.subs {left:  -500px;position: relative;top: 10px;width: 175px;border-left: none; border-bottom: 1px dotted #fff !important; cursor: pointer; cursor: hand;}
.subs:last-child{border: none;}
.hassubs:hover .dropdown,.hassubs .hassubs:hover .dropdown{opacity: 1;visibility: visible; transition: ease-in .35s;-moz-transition: ease-in .35s;-webkit-transition: ease-in .35s;}
.mainnav li:hover ul a,.mainnav li:hover ul li ul li a{color: white;}
.mainnav li ul li:hover,.mainnav li ul li ul li:hover{background: #fff;transition: ease-in-out .35s;-moz-transition: ease-in-out .35s;-webkit-transition: ease-in-out .35s;}
.mainnav li ul li:hover a,.mainnav li ul li ul li:hover a{color: maroon;transition: ease-in-out .35s;-moz-transition: ease-in-out .35s;-webkit-transition: ease-in-out .35s;}
/*Second Level*/
.hassubs .hassubs .dropdown .subs{left: -350px;position: relative;width: 165px;top: 0px;}
.hassubs .hassubs .dropdown{position: absolute;width: 150px;left: 0px;top: 0px;opacity: 0;visibility: hidden;transition: ease-out .35s;-moz-transition: ease-out .35s;-webkit-transition: ease-out .35s;}
.main .search-container {
  margin-left: 600px;
}

.main input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.main .search-container button {
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.main .search-container button:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {
  .main .search-container {
    float: none;
  }
  .main a, .main input[type=text], .main .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .main input[type=text] {
    border: 1px solid #ccc;  
  }

 </style>
            
    </head>
    <body>
            <div class="main">
                        <ul class="mainnav">
                            
                            <li class="hassubs">Filter
                                <ul class="dropdown">
                                    <li class="subs hassubs">User
                                        <ul class="dropdown">
                                            <li class="subs" onclick="on_searchType_click(this)">Name</li>
                                            <li class="subs" onclick="on_searchType_click(this)">Phone</li>
                                            <li class="subs" onclick="on_searchType_click(this)">Email</a></li>
                                            <li class="subs" onclick="on_searchType_click(this)">Address</li>
                                        </ul>
                                    </li>
                                   
                                    <li class="subs hassubs">Product
                                        <ul class="dropdown">
                                            <li class="subs" onclick="on_searchType_click(this)">Product Name</li>
                                            <li class="subs" onclick="on_searchType_click(this)">Product ID</li>
                                          
                                        </ul>
                                    </li>
                                   <li class="subs">Page</li>
                                </ul>
                            </li>
                            
                        
                            <div class="search-container">
    <form action="/action_page.php">
      <input id="searchquery" type="text" placeholder="Search.." name="search">
    </form>
    <button  type="submit" onclick="adminsearch()"><i class="fa fa-search"></i></button>

  </div>
                        <br style="clear: both;">
                    </div>
            
            
               
   

    </body>
</html>


