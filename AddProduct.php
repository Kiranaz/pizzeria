<?php
$conn = mysqli_connect('localhost','root','','pizzeria');

    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());}

    if (!mysqli_select_db($conn,'pizzeria')) {
        echo "Database Not Selected";
    }
$search_results=array();
$pagesname=array();
$productsname=array();

if ($_POST['purpose'] == "getpagesnames") {

    $sql = "SELECT Pagename FROM pages";
    $result = mysqli_query($conn, $sql);
    while($row=mysqli_fetch_row($result)) {
        	array_push($pagesname,$row);       
    	}

    $sql1 = "SELECT ProductID FROM products";
    $result1 = mysqli_query($conn, $sql1);
    while($row1=mysqli_fetch_row($result1)) {
        	array_push($productsname,$row1);       
    	}
    	array_push($search_results,$pagesname);
    	array_push($search_results,$productsname);
    echo json_encode($search_results);

    
}
elseif ($_POST['purpose'] == "sendAddProductData") {

        $name =  $_POST['name'];
        $ID = $_POST['ID'];
        if (strpos($_POST['price'],",") !== FALSE) {
            $price= explode(",",$_POST['price']);
            
        }else{
                $price = $_POST['price'];                
        }        

        $description = $_POST['description'];
        $page = $_POST['page'];
        $Size = array("small","regular","large");


        if ($page == "Beef Pizzas" || $page == "Chicken Pizza" || $page == "Special Pizza" ) {

            for ($i=0; $i < sizeof($Size); $i++) { 
                $size = $Size[$i];
                $id = $ID.$size;
                $perice = $price[$i];
                $sql="INSERT INTO products (ProductID,Name,Price,Size,Description) VALUES ('$id', '$name', '$perice','$size','$description')";
                if (!mysqli_query($conn,$sql)) {
                    echo 'Not inserted';
                }else{
                    echo 'Inserted';
                }                
            }           
        }else{
            $size = "-";
            $id = $ID."small";
            $sql="INSERT INTO products (ProductID,Name,Price,Size,Description) VALUES ('$id', '$name', '$price','$size','$description')";
            if (!mysqli_query($conn,$sql)) {
                    echo 'Not inserted';
                }else{
                    echo 'Inserted';
                }

        }

        $sql1="SELECT ProductIDs FROM pages WHERE Pagename = '$page'";
        $result=mysqli_query($conn,$sql1);
        $row = mysqli_fetch_row($result);
        $rowtobeinserted= $row[0].','.$ID;
        $sql2 = "UPDATE pages SET ProductIDs='$rowtobeinserted' WHERE Pagename='$page'";
        if(!mysqli_query($conn,$sql2)){
            echo "not updated";

        }else{
            echo "updated";
        }

        if ($page == "Beef Pizzas" || $page == "Chicken Pizza" || $page == "Special Pizza" ){

            $page2="All Pizzas";
            $sql4="SELECT ProductIDs FROM pages WHERE Pagename = '$page2'";
            $result4=mysqli_query($conn,$sql4);
            $row4 = mysqli_fetch_row($result4);
            $rowtobeinserted4= $row4[0].','.$ID;
            $sql3 = "UPDATE pages SET ProductIDs='$rowtobeinserted4' WHERE Pagename='$page2'";
            if(!mysqli_query($conn,$sql3)){
            echo "not updated 2";

            }else{
            echo "updated 2";
            }


        }elseif ($page == "Ice Cream" || $page == "Juices And Shakes" || $page == "Cake") {
            $page2="All Dessert";
            $sql4="SELECT ProductIDs FROM pages WHERE Pagename = '$page2'";
            $result4=mysqli_query($conn,$sql4);
            $row4 = mysqli_fetch_row($result4);
            $rowtobeinserted4= $row4[0].','.$ID;
            $sql3 = "UPDATE pages SET ProductIDs='$rowtobeinserted4' WHERE Pagename='$page2'";
            if(!mysqli_query($conn,$sql3)){
            echo "not updated 2";

            }else{
            echo "updated 2";
            }
            
        }elseif ($page == "Rolls" || $page == "Salad" || $page == "Soup") {
            $page2="Appetizer";
            $sql4="SELECT ProductIDs FROM pages WHERE Pagename = '$page2'";
            $result4=mysqli_query($conn,$sql4);
            $row4 = mysqli_fetch_row($result4);
            $rowtobeinserted4= $row4[0].','.$ID;
            $sql3 = "UPDATE pages SET ProductIDs='$rowtobeinserted4' WHERE Pagename='$page2'";
            if(!mysqli_query($conn,$sql3)){
            echo "not updated 2";

            }else{
            echo "updated 2";
            }
            
        }

        

 }  







?>



