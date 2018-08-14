<?php 
session_start();
if (isset($_POST["cart"])) {

	$name= json_decode($_POST['cart']);
	if(!isset($_SESSION['items'])) {
	$_SESSION['items'] = array();	
	array_push($_SESSION['items'],$name);

	}else{
		array_push($_SESSION['items'],$name);
	}
	
	
}

if (isset($_POST["cartnumbering"])) {
	$_SESSION['ordernumber']=$_POST["cartnumbering"];
	echo $_SESSION['ordernumber'];
}

if ($_POST['purpose']=="onloadcartnumber") {
	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	}
	
	if(!isset($_SESSION['ordernumber'])) {
		$_SESSION['ordernumber']="0";
	}
	$order_numbers = $_SESSION['ordernumber'];
	echo $order_numbers;
}

if ($_POST['purpose']=="cartnumberupdate") {
	$_SESSION['ordernumber']=$_POST['cartnumberupdate'];	
}

?>