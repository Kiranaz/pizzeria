<?php include 'header.php'; ?>
<?php
  session_start();
  $items = $_SESSION['items'];
 for($i = 0; $i < sizeof($items) ; $i++ ){
 	echo "id : ". $items[$i]->id ."<br>";
  	echo "qty : ". $items[$i]->qty ."<br>";
	
 }
 ?>




<?php include 'footer.php'; ?>