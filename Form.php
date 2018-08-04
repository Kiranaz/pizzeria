 
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


    $sql1="SELECT ID FROM User WHERE Phone='$Phone' ";

    if (mysqli_query($conn,$sql1) == FALSE) {
            $sql="INSERT INTO User(Name,Email,Phone,Address) VALUES('$Name','$Email','$Phone','$Comment')";

        if (!mysqli_query($conn,$sql)) {
        echo 'Not inserted';
        }else{
        echo 'Inserted';
        }

        $latest_userID = mysqli_insert_id($conn);
        
    }else{
        $result1 = mysqli_query($conn, $sql1);
        $row1 = mysqli_fetch_row($result1);
        $latest_userID=$row1[0];
    }

    





    
    //echo $latest_userID;

    $sql2="INSERT INTO orders1(userID) VALUES('$latest_userID')";

    if (!mysqli_query($conn,$sql2)) {
        echo 'Not inserted in order table: '. mysqli_error($conn);
    }else{
        //echo 'Inserted in order table';
    }

    $latest_orderID = mysqli_insert_id($conn);
    //echo $latest_orderID; 



    session_start();
    $items = $_SESSION['items'];

    for($i = 0; $i < sizeof($items) ; $i++ ){

        $curr_itemID = $items[$i]->id;
        $curr_qnty = $items[$i]->qty;

        $sql3 = "INSERT INTO order_items1(orderID,ProductID,quantity,price) VALUES('$latest_orderID','$curr_itemID','$curr_qnty',(SELECT Price FROM products WHERE ProductID = '$curr_itemID'))";

        if (!mysqli_query($conn,$sql3)) {echo 'Not inserted in order_items1 table: '. mysqli_error($conn);}
        else{//echo 'Inserted in order_items1 table';
                    }

    }

    






    }





    else{
       // echo "not";
    }






 ?>

