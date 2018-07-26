<?php


if (isset($_POST["id"])) {
	session_start();
	$id_to_remove = $_POST["id"];
	array_splice($_SESSION['items'],$id_to_remove,1);
<<<<<<< HEAD
	// echo $id_to_remove;
	// unset($_SESSION['items'][$id_to_remove]);
	# code...
=======
	// session_unset($_SESSION['items'][$id_to_remove]);
	
>>>>>>> b73f4aa59725824db10250b79635add79bfdd539
}


?>
