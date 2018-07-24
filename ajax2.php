<?php


if (isset($_POST["id"])) {
	session_start();
	$id_to_remove = $_POST["id"];
	echo $id_to_remove;
	unset($_SESSION['items'][$id_to_remove]);
	# code...
}


?>
