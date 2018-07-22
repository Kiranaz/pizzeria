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

 $dataname=array();
 $dataprice=array();
 $datasize=array();

$conn = mysqli_connect('localhost','root','abc123','pizzeria');

    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());}

    if (!mysqli_select_db($conn,'pizzeria')) {
        echo "Database Not Selected";
    }

    $sql = "SELECT Name, Price, Size FROM products WHERE Price = '200' ";

    $result = mysqli_query($conn, $sql);

    $num_of_results = mysqli_num_rows($result);

if ($num_of_results > 0) {
    // output data of each row
    while($row=mysqli_fetch_row($result)) {
        echo "<br><br><br><br><br><br><br>Name" . $row[0]. "  price:" . $row[1]. "  Size: " . $row[2] . "<br>";
        array_push($dataname,$row[0]);
        array_push($dataprice,$row[1]);
        array_push($datasize,$row[2]);
        
    }
} else {
    echo "0 results";
}






?>




<script type="text/javascript">

    
</script>

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

<?php
    $simple = 'demo text string';
    
?>

<script type="text/javascript">





	function cart_table1()
{
	
	 var no_of_loops = '<?php echo $num_of_results; ?>';


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
					
	var data_node1 = <?php echo json_encode($dataname); ?>;
	var node1_textnode = document.createTextNode(data_node1[i]);
	node1.appendChild(node1_textnode);


					//_________________________________filling node 2 __________________________________________//

	var select1 = document.createElement("select");

			// creating small option // 
	var option1 = document.createElement("option");
		var option1_value = document.createAttribute("value"); option1_value.value ="small";
		option1.setAttributeNode(option1_value);
		option1.appendChild(document.createTextNode("small"));

			// creating medium option // 
	var option2 = document.createElement("option");
		var option2_value = document.createAttribute("value"); option2_value.value ="regular";
		option2.setAttributeNode(option2_value);
		option2.appendChild(document.createTextNode("regular"));

			// creating large option //
	var option3 = document.createElement("option");
		var option3_value = document.createAttribute("value"); option3_value.value ="large";
		option3.setAttributeNode(option3_value);
		option3.appendChild(document.createTextNode("large"));

			//appending options to select //
	select1.appendChild(option1);
	select1.appendChild(option2);
	select1.appendChild(option3);
			// appending select1 to node2 //
	node2.appendChild(select1);



					//_________________________________filling node 3 __________________________________________//

	var select2 = document.createElement("select");

			// creating 1 option // 
	var option4 = document.createElement("option");
		var option4_value = document.createAttribute("value"); option4_value.value ="1";
		option4.setAttributeNode(option4_value);
		option4.appendChild(document.createTextNode("1"));


			// creating 2 option // 
	var option5 = document.createElement("option");
		var option5_value = document.createAttribute("value"); option5_value.value ="2";
		option5.setAttributeNode(option5_value);
		option5.appendChild(document.createTextNode("2"));

			// creating 3 option //
	var option6 = document.createElement("option");
		var option6_value = document.createAttribute("value"); option6_value.value ="3";
		option6.setAttributeNode(option6_value);
		option6.appendChild(document.createTextNode("3"));

			// creating 4 option //
	var option7 = document.createElement("option");
		var option7_value = document.createAttribute("value"); option7_value.value ="4";
		option7.setAttributeNode(option7_value);
		option7.appendChild(document.createTextNode("4"));

			// creating 5 option //
	var option8 = document.createElement("option");
		var option8_value = document.createAttribute("value"); option8_value.value ="4";
		option8.setAttributeNode(option8_value);
		option8.appendChild(document.createTextNode("5"));

			//appending options to select //
	select2.appendChild(option4);
	select2.appendChild(option5);
	select2.appendChild(option6);
	select2.appendChild(option7);
	select2.appendChild(option8);
			// appending select1 to node2 //
	node3.appendChild(select2);


				//_________________________________filling node 4 __________________________________________//

	var data_node2 = <?php echo json_encode($dataprice); ?>;
	var node4_textnode = document.createTextNode(data_node2[i]);
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
	var main_node_id = document.createAttribute("id"); main_node_id.value ="table_list";
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