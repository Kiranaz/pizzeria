<?php include 'header.php';?>
	<title>Cart</title>
</head>
<body onload="cart_table1()">
	




<?php
session_start();
 $items = $_SESSION['items'];
<<<<<<< HEAD
=======
 
>>>>>>> 27d25d88aac40e6221c93126cc3604c39a735a64
// for($i = 0; $i < sizeof($items) ; $i++ ){
// 	echo "id : ". $items[$i]->id ."<br>";
//  	echo "qty : ". $items[$i]->qty ."<br>";
// }

 $dataname=array();
 $dataprice=array();
 $datasize=array();
 $dataquantity=array();

$conn = mysqli_connect('localhost','root','','pizzeria');

    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());}

    if (!mysqli_select_db($conn,'pizzeria')) {
        echo "Database Not Selected";
    }


    for($i = 0; $i < sizeof($items) ; $i++ ){

    	array_push($dataquantity,$items[$i]->qty);  
    	$PrdtID = $items[$i]->id;
    $sql = "SELECT Name, Price, Size FROM products WHERE ProductID = '$PrdtID' ";

    $result = mysqli_query($conn, $sql);

    $num_of_results = mysqli_num_rows($result);

if ($num_of_results > 0) {
    // output data of each row
    	while($row=mysqli_fetch_row($result)) {
        //echo "<br><br><br><br><br><br><br>Name" . $row[0]. "  price:" . $row[1]. "  Size: " . $row[2] . "<br>";
        	array_push($dataname,$row[0]);
        	array_push($dataprice,$row[1]);
        	array_push($datasize,$row[2]);        
    	}
	} 
	else {echo "0 results";}

}

<<<<<<< HEAD
=======


function remove_session(){
	session_unset();
}

>>>>>>> 27d25d88aac40e6221c93126cc3604c39a735a64


?>


<<<<<<< HEAD
=======


<script type="text/javascript">

    
</script>

>>>>>>> d7df17bc3504425a8d242f1c95f554bbc014e0ff
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



<?php
    $simple = 'demo text string';
    
?>

<script type="text/javascript">





	function cart_table1()
{
	
	 var no_of_loops = '<?php echo sizeof($dataname); ?>';
	 var data_node1 = <?php echo json_encode($dataname); ?>;
	 var data_node2 = <?php echo json_encode($datasize); ?>;
	 var data_node3 = <?php echo json_encode($dataquantity); ?>;
	 var data_node4 = <?php echo json_encode($dataprice); ?>;
	 
	 for (var i = 0; i < no_of_loops; i++) {


	 		//________________________________________________________creating <td>__________________________________________________//

	var node1 = document.createElement("TD");
	var node2 = document.createElement("TD");
	var node3 = document.createElement("TD");
	var node4 = document.createElement("TD");
	var node5 = document.createElement("TD");

											//   creating this <td class="each_row">  //

	var node_class1 = document.createAttribute("class");
	node_class1.value ="each_row";
	node1.setAttributeNode(node_class1);

	var node_class2 = document.createAttribute("class");
	node_class2.value ="each_row";
	node2.setAttributeNode(node_class2);

	var node_class3 = document.createAttribute("class");
	node_class3.value ="each_row";
	node3.setAttributeNode(node_class3);

	var node_class4 = document.createAttribute("class");
	node_class4.value ="each_row";
	node4.setAttributeNode(node_class4);

	var node_class5 = document.createAttribute("class");
	node_class5.value ="each_row";
	node5.setAttributeNode(node_class5);


											//creating id of every node//
	var node_id1 = document.createAttribute("id"); node_id1.value ="Row_name";
	node1.setAttributeNode(node_id1);

	var node_id2 = document.createAttribute("id"); node_id2.value ="Row_size";
	node2.setAttributeNode(node_id2);

	var node_id3 = document.createAttribute("id"); node_id3.value ="Row_quantity";
	node3.setAttributeNode(node_id3);

	var node_id4 = document.createAttribute("id"); node_id4.value ="Row_price";
	node4.setAttributeNode(node_id4);

	var node_id5 = document.createAttribute("id"); node_id5.value ="Row_remove";
	node5.setAttributeNode(node_id5);


	

					//_________________________________filling node 1 __________________________________________//
					
	
	var node1_textnode = document.createTextNode(data_node1[i]);
	node1.appendChild(node1_textnode);


					//_________________________________filling node 2 __________________________________________//


	
	var node2_textnode = document.createTextNode(data_node2[i]);
	node2.appendChild(node2_textnode);

					//_________________________________filling node 3 __________________________________________//

	
	var node3_textnode = document.createTextNode(data_node3[i]);
	node3.appendChild(node3_textnode);


				//_________________________________filling node 4 __________________________________________//

	
	var node4_textnode = document.createTextNode(data_node4[i]*data_node3[i]);
	node4.appendChild(node4_textnode);
	


				//_________________________________filling node 5 __________________________________________//

	var button1 = document.createElement("button");

	var button1_id = document.createAttribute("id"); button1_id.value ="X_btn";
	button1.setAttributeNode(button1_id);

	var button1_onclick = document.createAttribute("onclick"); button1_onclick.value ="cart_table_remove(this)";	
	button1.setAttributeNode(button1_onclick);

	var node5_textnode = document.createTextNode("X");
	button1.appendChild(node5_textnode);
	node5.appendChild(button1);
	
				//_________________________________appending all nodes to <tr> __________________________________________//

	var main_node = document.createElement("TR");
	var main_node_class = document.createAttribute("class"); main_node_class.value ="table_list";
	main_node.setAttributeNode(main_node_class);
	var main_node_id = document.createAttribute("id"); main_node_id.value = i ;
	main_node.setAttributeNode(main_node_id);
	main_node.appendChild(node1);
	main_node.appendChild(node2);
	main_node.appendChild(node3);
	main_node.appendChild(node4);
	main_node.appendChild(node5);

				//_________________________________appending <tr> __________________________________________//
	document.getElementById("table_body").appendChild(main_node);
	 	
	 }
	


}






</script>




</body>
</html>	