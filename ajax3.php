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
   
    
    $RAM=array();

    for($i = 0; $i < sizeof($productsname) ; $i++ ){
  
    $PrdtID1 = $productsname[$i]."small";
    $sql1 = "SELECT Name, Price, Size, Description FROM products WHERE ProductID = '$PrdtID1' ";

    $PrdtID2 = $productsname[$i]."regular";
    $sql2 = "SELECT Name, Price, Size, Description FROM products WHERE ProductID = '$PrdtID2' ";

    $PrdtID3 = $productsname[$i]."large";
    $sql3 = "SELECT Name, Price, Size, Description FROM products WHERE ProductID = '$PrdtID3' ";



    $result1 = mysqli_query($conn, $sql1);
    $row1 = mysqli_fetch_row($result1);
    $result2 = mysqli_query($conn, $sql2);
    $row2 = mysqli_fetch_row($result2);
    $result3 = mysqli_query($conn, $sql3);
    $row3 = mysqli_fetch_row($result3);

    $row1[4]=$PrdtID1;
    $row2[4]=$PrdtID2;
    $row3[4]=$PrdtID3;

    if ($result1 != FALSE) {array_push($RAM,$row1);}
    if ($result2 != FALSE) {array_push($RAM,$row2);}
    if ($result3 != FALSE) {array_push($RAM,$row3);}

   

}

echo json_encode($RAM);


}






?>