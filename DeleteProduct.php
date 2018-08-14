<?php

$conn = mysqli_connect('localhost','root','','pizzeria');

    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());}

    if (!mysqli_select_db($conn,'pizzeria')) {
        echo "Database Not Selected";
    }

  $ID = $_POST['ID'];
  $flag = $_POST['flag'];
  $sizes = array("small","regular","large");
  if (strpos($ID,"small") !== FALSE) {
  	$ID2 = trim($ID,"small");
  }elseif (strpos($ID,"regular") !== FALSE) {
  	$ID2 = trim($ID,"regular");  	
  }elseif (strpos($ID,"large") !== FALSE) {
  	$ID2 = trim($ID,"large");  	
  }

  if ($flag=="single") {
  	$sql = "DELETE FROM products WHERE ProductID = '$ID' ";
  	if(!mysqli_query($conn,$sql)){
  		echo "Product not Deleted";
  	}else{
  		echo "product Deleted";
  	}
  }elseif ($flag=="triple") {
  	for ($i=0; $i < 3 ; $i++) {
  		$ID3=$ID2.$sizes[$i];
  		$sql1 = "DELETE FROM products WHERE ProductID = '$ID3' ";
  		
  		if(!mysqli_query($conn,$sql1)){
  			echo $ID3." not Deleted ";
  		}else{
  			echo $ID3." Deleted ";
  		}
  	}

  }

  








 ?>