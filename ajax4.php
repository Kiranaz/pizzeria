<?php 
session_start();
if (isset($_POST["cart1"])) {

	$name= json_decode($_POST['cart1']);
	
	$_SESSION['cartqty'] = array();	
    array_push($_SESSION['cartqty'],$name);

    echo "Number of Items in the cart = ".sizeof($_SESSION['cartqty'])."
	
	
}

?>