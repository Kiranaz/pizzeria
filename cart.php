<?php include 'header.php';?>
	<title>Cart</title>
</head>
<body onload="cart_table1()" class="bigcart" id="b14a">
<div class="" id="">
<div class="bgcart" id="b14b"></div>
	<!-----------------------------------------------------------PHP---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->




<?php
$nameErr=$EmailErr=$PhoneErr="";
 $name = $Email = $comment =$Phone="";
 

session_start();
 $items = $_SESSION['items'];
// for($i = 0; $i < sizeof($items) ; $i++ ){
// 	echo "id : ". $items[$i]->id ."<br>";
//  	echo "qty : ". $items[$i]->qty ."<br>";
// }
 $dataname=array();
 $dataprice=array();
 $datasize=array();
 $dataquantity=array();

$conn = mysqli_connect('localhost','root','','pizzeria');

    if (!$conn) {die("Connection failed: " . mysqli_connect_error());}

    if (!mysqli_select_db($conn,'pizzeria')) { echo "Database Not Selected"; }


    for($i = 0; $i < sizeof($items) ; $i++ ){

    	array_push($dataquantity,$items[$i]->qty);  
    	$PrdtID = $items[$i]->id;
    $sql = "SELECT Name, Price, Size FROM products WHERE ProductID = '$PrdtID' ";

    $result = mysqli_query($conn, $sql);

    $num_of_results = mysqli_num_rows($result);

if ($num_of_results > 0) {
    
    	while($row=mysqli_fetch_row($result)) {
        	array_push($dataname,$row[0]);
        	array_push($dataprice,$row[1]);
        	array_push($datasize,$row[2]);        
    	}
	} 
	else {echo "0 results";}

}


?>
 


<!-------------------------------------------------------------HTML-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
	
	<div class="order_table_div">
		
		<br><br><br>
	<table class="table table-striped  table-dark hoverTable table-bordered">

<thead > 

<tr style=" color: black; ">
<th width="40%" class="table_head_css"scope="col"><center>Name</center></th>
<th width="20%" class="table_head_css"scope="col"><center>Size</center></th>
<th width="20%" class="table_head_css"scope="col"><center>Quantity</center></th>
<th width="18%" class="table_head_css"scope="col"><center>Price&emsp;<small style="font-size: 12px;" >In Rs</small></center></th>
<th width="2%"  class="table_head_css"scope="col"><center>Remove</center></th>
</tr>
</thead>

<tbody id="table_body">


</tbody>

</table>
<br>
<div class="totals">
	<table> 
	
	<tr>
		<td id="subtotal">Subtotal:&emsp;&emsp;&emsp;Rs</td>
		<td id="subtotalvalue"></td>
	</tr>
	<tr>
		<td id="deliverycharges">Delivery charges: Rs</td>
		<td id="deliverychargesvalue">150</td>
	</tr>
	<tr id="tdcolor">
		<td id="total">Total:&emsp;&emsp;&emsp;&ensp;&ensp;Rs</td>
		<td id="totalvalue"></td>
	</tr>

	</table>
	
	
</div>
<div class="container">
<div class="proceed_button">
	<button onclick="checkk(); openNav()" class="btn btn-success">PROCEED</button>	
</div>
</div>
<br><br>
</div>

</div>


<div id="myNav" class="sidebar_overlay">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <!--<div class="Sidebar_overlay-content">  -->


    <div id="contact">
    <div class="section-content">
        <h1 class="section-header">Make Order</h1>
    </div>
    <div class="contact-section">
        <div class="container">
    <form   id="userForm">
        <div class="col-md-6 form-line">
        <div class="form-group">
        <label for="exampleInputUsername">Your Name:</label>
        <input type="text" class="form-control" id="Name"  value="<?php echo $name; ?>" placeholder="Enter Name">
        <span id="nameerror" class="error"></span>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail">Email Address</label>
        <input type="text" class="form-control" id="Email" value="<?php echo $Email; ?>" placeholder="Enter Email ID">
        <span id="emailerror" class="error"></span>
        </div>
        <div class="form-group">
        <label for="telephone">Mobile No.</label>
            <input type="text" class="form-control" id="Phone" value="<?php echo $Phone; ?>" placeholder="Enter 11-digit mobile no.">
        <span id="phoneerror" class="error"> </span>
        </div>
    </div>
    
    <div class="col-md-6">
        <div class="form-group">
           <label for ="description"> Address</label>
        <textarea class="form-control" id="Comment" placeholder="Enter Your Complete Address">
            <?php echo $comment; ?>
        </textarea>
    </div>
    <div>
    		
            
                    

	</form>
    <button onclick="sendForm()" type="button" class="formbutton">Submit</button> 

    
    </div>
</div>
  


</div>




<!----------------------------------------------------------JAVASCRIPT----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

<script type="text/javascript">


var subtotal=0;



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

	subtotal +=  (data_node4[i]*data_node3[i]);
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

	  
	 document.getElementById("subtotalvalue").innerHTML= subtotal;
	 if (subtotal == 0){
	 document.getElementById("totalvalue").innerHTML= 150;

	 }else{
	 	document.getElementById("totalvalue").innerHTML=subtotal+150;
	 }



	


	}

	
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


function sendForm(){


	var name = document.getElementById("Name").value; 
	var email = document.getElementById("Email").value;
	var phone = document.getElementById("Phone").value;
	var comment = document.getElementById("Comment").value;
	//alert(name+email+phone+comment);
	
	var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "Form.php", true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

    	console.log(this.responseText);
    	var k = JSON.parse(this.responseText);

    	//alert(k[0]);
    	
		
    	document.getElementById("nameerror").innerHTML= k[0];
    	document.getElementById("emailerror").innerHTML=k[1];
    	document.getElementById("phoneerror").innerHTML=k[2];
    	 
    }
  };
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("name="+name+"&email="+email+"&phone="+phone+"&comment="+comment);


    $("button").click(function(){
       
            alert("Thank You " +name+ " For Ordering From PIZZERIA DE NEDIAN. WE will contact you shortly.");
            window.location = "http://localhost/pizzeria/AllPizzas.php";
        
    });   
}
 function checkk(){
	 if(subtotal < 500){
		 alert("Order must be of Rs 500 or more.");
		             window.location = "http://localhost/pizzeria/cart.php";
	 }
	 else{

	 }
 }


</script>






</body>
</html>	