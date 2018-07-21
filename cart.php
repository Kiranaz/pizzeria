<?php include 'header.php';?>
	<title>Cart</title>
</head>
<body>
	




<?php
session_start();
 $items = $_SESSION['items'];
for($i = 0; $i < sizeof($items) ; $i++ ){
	echo "id : ". $items[$i]->id ."<br>";
 	echo "qty : ". $items[$i]->qty ."<br>";
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