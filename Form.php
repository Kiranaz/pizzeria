 <!DOCTYPE html>
 <html>
 <head>

    <script type="text/javascript" src="logics.js"></script>
   
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    
    <link href="https://fonts.googleapis.com/css?family=Oleo+Script:400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Teko:400,700" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <title>Form</title>
 </head>

 <style>
.error {color: #FF0000;}
</style>
 <body>



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



 <div id="contact">
    <div class="section-content">
        <h1 class="section-header">Make Order</h1>
    </div>
    <div class="contact-section">
        <div class="container">
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST" >
        <div class="col-md-6 form-line">
        <div class="form-group">
        <label for="exampleInputUsername">Your Name:</label>
        <input type="text" class="form-control" name="name" value="<?php echo $name; ?>" placeholder="Enter Name">
        <span class="error"><?= $nameErr?></span>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail">Email Address</label>
        <input type="text" class="form-control" name="Email" value="<?php echo $Email; ?>" placeholder="Enter Email ID">
        <span class="error"><?= $EmailErr;?></p> </span>
        </div>
        <div class="form-group">
        <label for="telephone">Mobile No.</label>
            <input type="text" class="form-control" name="Phone" value="<?php echo $Phone; ?>" placeholder="Enter 11-digit mobile no.">
        <span class="error"><?=$PhoneErr; ?></p> </span>
        </div>
    </div>
    
    <div class="col-md-6">
        <div class="form-group">
           <label for ="description"> Address</label>
        <textarea class="form-control" name="comment" placeholder="Enter Your Complete Address">
            <?php echo $comment; ?>
        </textarea>
    </div>
    <div>
            <button type="submit" name="submit" value="submit" class="btn btn-default submit">  Order</button>
                        </div>
                         <p class="text-warning">Order must of Rs 500 or more.</p>
                        
                    </div>

    </form>
    </div>
</div>
</body>
    <html>
