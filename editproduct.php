<?php 

$conn = mysqli_connect('localhost','root','abc123','pizzeria');

    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());}

    if (!mysqli_select_db($conn,'pizzeria')) {
        echo "Database Not Selected";
    }


   $name = $_POST['name'];
   $price = $_POST['price'];
   $description = $_POST['description'];
   $ID = $_POST['ID'];
   echo $name.$price.$description;


   $sql = "UPDATE products SET Name='$name',Price='$price',Description='$description' WHERE ProductID='$ID'";
   if(!mysqli_query($conn,$sql)){
   	echo "not updated";
   }else{
   	echo "updated";
   }






 ?>