<?php


if (isset($_POST["id"])) {
	session_start();
	$id_to_remove = $_POST["id"];
	array_splice($_SESSION['items'],$id_to_remove,1);
	// echo $id_to_remove;
	// unset($_SESSION['items'][$id_to_remove]);
	# code...
}


?>
