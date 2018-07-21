<?php include 'header.php';?>
	<title>Cart</title>
</head>
<body>
	



// <tr id="table_list">
// 		<td id="Row_name"     class="each_row">
// 			pizza name
// 		</td>


// 		<td id="Row_size"     class="each_row">
// 			<select id="1">
// 				<option value="small">small</option>
//         		<option value="regular">regular</option>
//         		<option value="large">large</option>
//         	</select>
// 		</td>


// 		<td id="Row_quantity" class="each_row">
// 			<select id="2">
// 				<option value="1">1</option>
//         		<option value="2">2</option>
//         		<option value="3">3</option>
//         		<option value="4">4</option>
//         		<option value="5">5</option>
//         	</select>
// 		</td>


// 		<td id="Row_price"    class="each_row">
// 			Price
// 		</td>


// 		<td id="Row_remove"   class="each_row">
// 			<button id="X_btn" onclick="cart_table_remove(this)"> X </button>
// 		</td>
// 	</tr>
<!-- <?php
session_start();
 $items = $_SESSION['items'];
for($i = 0; $i < sizeof($items) ; $i++ ){
	echo "id : ". $items[$i]->id ."<br>";
 	echo "qty : ". $items[$i]->qty ."<br>";
}
?> -->
<?php
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