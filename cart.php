<?php include 'header.php';?>
	<title>Cart</title>
</head>
<body>
	




<?php
// session_start();
//  $items = $_SESSION['items'];
// for($i = 0; $i < sizeof($items) ; $i++ ){
// 	echo "id : ". $items[$i]->id ."<br>";
//  	echo "qty : ". $items[$i]->qty ."<br>";
// }

$conn = mysqli_connect('localhost','root','abc123','pizzeria');

    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());}

    if (!mysqli_select_db($conn,'pizzeria')) {
        echo "Database Not Selected";
    }

    $sql = "SELECT Name, Price, Size FROM products WHERE ProductID = 'menu1large' ";

    $result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "<br><br><br><br><br><br><br>Name" . $row["Name"]. "  price:" . $row["Price"]. "  Size: " . $row["Size"] . "<br>";
    }
} else {
    echo "0 results";
}





?>



	<div class="order_table_div">
		

	<table class="order_history">

<thead > 

<tr style=" color: black; ">
<th width="40%" class="table_head_css">Name</th>
<th width="20%" class="table_head_css">Size</th>
<th width="20%" class="table_head_css">Quantity</th>
<th width="18%" class="table_head_css">price</th>
<th width="2%"  class="table_head_css">Remove</th>
</tr>
</thead>

<tbody id="table_body">


</tbody>

</table>

</div>

<button onclick="cart_table1()">Try it haseeb</button>



</body>
</html>	