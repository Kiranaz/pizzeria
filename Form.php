 
<?php

 $nameErr=$EmailErr=$PhoneErr="";
 $name = $Email = $comment =$Phone="";

 if ($_SERVER["REQUEST_METHOD"] == "POST") {


    if (empty($_POST["name"])) {
        $nameErr = "Name is Required";
    } else{
        $name = test_input($_POST["name"]);

        if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
            $nameErr = "Only letters and white space allowed";
        }
    }


    if (empty($_POST["Email"])) {
        $EmailErr = "Email is Required";
    } else{
        $Email = test_input($_POST["Email"]);

        if (!filter_var($Email, FILTER_VALIDATE_EMAIL)) {
            $EmailErr="Invalid Email Format";
        }
    }


    if (empty($_POST["comment"])) {
        $comment ="";
    } else{
        $comment= test_input($_POST["comment"]);
    }


    if (empty($_POST["Phone"])) {
        $PhoneErr = "Phone number is Required";
    } else{
        $Phone = $_POST["Phone"];

        if (!(strlen($Phone)==11) ) {
            $PhoneErr="Invalid Phone Number";
        }
    }

    }


    


    function test_input($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;

    }


 ?>

 <?php
//____________________________________- MYSQL _________________________________

    if(isset($_POST['submit']) && $nameErr=="" && $EmailErr=="" && $PhoneErr=="" ) {
    

    $conn = mysqli_connect('localhost','root','abc123','pizzeria');

    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());}

    if (!mysqli_select_db($conn,'pizzeria')) {
        echo "Database Not Selected";
    }

    $Name = $_POST["name"];
    $Email = $_POST["Email"];
    $Comment = $_POST["comment"];
    $Phone=$_POST["Phone"];

    $sql="INSERT INTO User(Name,Email,Phone,Address) VALUES('$Name','$Email','$Phone','$Comment')";

    if (!mysqli_query($conn,$sql)) {
        echo 'Not inserted';
    }else{
        echo 'Inserted';
    }

    }


 ?>

