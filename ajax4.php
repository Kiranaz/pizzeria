<?php 

if (isset($_POST['pagename'])) {

	$pagename = $_POST['pagename'];
	$conn = mysqli_connect('localhost','root','abc123','pizzeria');

    if (!$conn) {die("Connection failed: " . mysqli_connect_error());}

    if (!mysqli_select_db($conn,'pizzeria')) { echo "Database Not Selected"; }

    $sql = "SELECT ProductIDs FROM pages WHERE Pagename = '$pagename' ";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_row($result);
    $productsname= explode(",",$row[0]);
   
    
    echo json_encode($productsname);
    
   

}









?>