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

?>