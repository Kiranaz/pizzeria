 
<?php

 $nameErr=$EmailErr=$PhoneErr="";
 $name = $Email = $comment =$Phone="";
 $data_to_be_sent = array();


    if (empty($_POST["name"])) {
        $nameErr = "Name is Required";
        array_push($data_to_be_sent,$nameErr);
    } else{
        $name = test_input($_POST["name"]);

        if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
            $nameErr = "Only letters and white space allowed";
            array_push($data_to_be_sent,$nameErr);
        }
        else{
        array_push($data_to_be_sent,""); }


    }


    if (empty($_POST["email"])) {
        $EmailErr = "Email is Required";
        array_push($data_to_be_sent,$EmailErr);
    } else{
        $Email = test_input($_POST["email"]);

        if (!filter_var($Email, FILTER_VALIDATE_EMAIL)) {
            $EmailErr="Invalid Email Format";
            array_push($data_to_be_sent,$EmailErr);
        }else{
        array_push($data_to_be_sent,""); }

    }


    if (empty($_POST["comment"])) {
        $comment ="";
    } else{
        $comment= test_input($_POST["comment"]);
    }


    if (empty($_POST["phone"])) {
        $PhoneErr = "Phone number is Required";
        array_push($data_to_be_sent,$PhoneErr);
    } else{
        $Phone = $_POST["phone"];

        if (!(strlen($Phone)==11) ) {
            $PhoneErr="Invalid Phone Number";
            array_push($data_to_be_sent,$PhoneErr);
        }
        else{
        array_push($data_to_be_sent,""); }
    }

       

    echo json_encode($data_to_be_sent);
    //echo $data_to_be_sent;
    

    


    function test_input($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;

    }


 ?>

 <?php
//____________________________________- MYSQL _________________________________

    if( $nameErr=="" && $EmailErr=="" && $PhoneErr=="" ) {
    

    $conn = mysqli_connect('localhost','root','abc123','pizzeria');

    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());}

    if (!mysqli_select_db($conn,'pizzeria')) {
        echo "Database Not Selected";
    }

    $Name = $_POST["name"];
    $Email = $_POST["email"];
    $Comment = $_POST["comment"];
    $Phone=$_POST["phone"];

    $sql="INSERT INTO User(Name,Email,Phone,Address) VALUES('$Name','$Email','$Phone','$Comment')";

    if (!mysqli_query($conn,$sql)) {
        echo 'Not inserted';
    }else{
        echo 'Inserted';
    }

    }
    else{
       // echo "not";
    }


 ?>

