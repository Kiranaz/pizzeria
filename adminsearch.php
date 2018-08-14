<?php 


$conn = mysqli_connect('localhost','root','','pizzeria');

    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());}

    if (!mysqli_select_db($conn,'pizzeria')) {
        echo "Database Not Selected";
    }
$search_results=array();


if ($_POST['searchcategory'] == "Add Product") {

    
    
}



if ($_POST['searchcategory'] == "userdetails") {

	$searchquery = $_POST['searchquery'];
    $searchType = $_POST['searchType'];




if ($searchType == "Name") {
	$sql="SELECT ID,Name,Email,Phone,Address FROM user WHERE Name LIKE '%{$searchquery}%'";
}
elseif ($searchType == "Phone") {
	$sql="SELECT ID,Name,Email,Phone,Address FROM user WHERE Phone LIKE '%{$searchquery}%'";
	
}elseif ($searchType == "Email") {
	$sql="SELECT ID,Name,Email,Phone,Address FROM user WHERE Email LIKE '%{$searchquery}%'";

}elseif ($searchType == "Address") {
	$sql="SELECT ID,Name,Email,Phone,Address FROM user WHERE Address LIKE '%{$searchquery}%'";

}elseif ($searchType == "Product Name") {
	$sql="SELECT ProductID,Name,Price,Size,Description FROM products WHERE Name LIKE '%{$searchquery}%'";

}elseif ($searchType == "Product ID") {
	$sql="SELECT ProductID,Name,Price,Size,Description FROM products WHERE ProductID LIKE '%{$searchquery}%'";
}


    if (!mysqli_query($conn,$sql)) {
        echo 'Not inserted';
    }

    

    $result = mysqli_query($conn,$sql);

    while($row=mysqli_fetch_row($result)) {
        	array_push($search_results,$row);       
    	}
    
   echo json_encode($search_results);
}



else if ($_POST['searchcategory']== "userorders") {


	$searchquery = $_POST['searchquery'];

	$sql="SELECT orderID,Date_Time FROM orders1 WHERE userID='$searchquery' ";

	$result = mysqli_query($conn,$sql);
	while($row=mysqli_fetch_row($result)) {
        	array_push($search_results,$row);       
    	}

    	echo json_encode($search_results);
}


else if ($_POST['searchcategory']== "orderitems") {

	$ProductIDs=array();
	$nameSizes=array();
	$searchquery = $_POST['searchquery'];

	$sql1="SELECT ProductID,quantity,price FROM order_items1 WHERE orderID='$searchquery' ";
	$result = mysqli_query($conn,$sql1);
		
		while($row=mysqli_fetch_row($result)) {
        	array_push($ProductIDs,$row);       
    	}

    	
    	for ($i=0; $i < sizeof($ProductIDs) ; $i++) {
    		$currID = $ProductIDs[$i][0];
    		$sql2 = "SELECT Name,Size FROM products WHERE ProductID = '$currID' ";
    		$result2 = mysqli_query($conn,$sql2);
    		 while($row=mysqli_fetch_row($result2)) {
         		array_push($nameSizes,$row); 
         		     
    		 }
   		
    	}

    	for ($i=0; $i < sizeof($nameSizes) ; $i++) { 
    		$nameSizes[$i][2]= $ProductIDs[$i][1];
    		$nameSizes[$i][3]= $ProductIDs[$i][2];
    		array_push($search_results, $nameSizes[$i]);
    	}
    	echo json_encode($search_results);

}





?>