	window.onscroll = function(){
		var nav = document.getElementById('nav');
		if (window.pageYOffset > 80) {
			
			document.getElementById("logoimg").style.width="80px";
		}
		else{
			document.getElementById("logoimg").style.width="100px";
		}
	}



function imgchange(s){
	var a=document.getElementsByTagName("img");
var i;
var m = document.getElementById("abc123");

for (i=0; i < a.length ; i++) {
	
	if (m.src == a[i].src && a[i].id != m.id ) {
		
		a[i].style.visibility="visible";

	}
}
}



function change(x){

	var m = "";
	m=x.src;

	document.getElementById("abc12345").style.top=x.style.top;
	document.getElementById("abc12345").style.left=x.style.left;
	document.getElementById("abc123").src=x.src;
	x.style.visibility="hidden";
	var srcsplit = m.split("/");
	var imagenamewithext = srcsplit[srcsplit.length-1];
	var imagenamesplit = imagenamewithext.split(".");
	var imagename = imagenamesplit[0];
	

var t = document.getElementById("overlaytext1");

	var index = search_descript_price(imagename);
	t.innerHTML='<span id="descript1" style="font-size:2vh; font-family:Pacifico; line-height: 0.6;"><p id="price1"></p></span>'; //line-height is minimized to show complete overlay text
	document.getElementById("descript1").innerHTML=Descrp_price[index][3];
	var rs = document.createTextNode("Rs "); //For showing Rs
	var p = document.createElement("p");
	var p_id = document.createAttribute("id"); p_id.value ="price1";
	p.style.fontWeight = 'bold'; //for making price bold
	p.style.fontSize = '20px'; //for making it prominent
	p.setAttributeNode(p_id);
	var rs_p = document.createElement("p"); //same as we did for var p
		document.getElementById("descript1").appendChild(p);
		rs_p.appendChild(rs); //appending in p
	document.getElementById("descript1").insertBefore(rs_p, document.getElementById("descript1").childNodes[1]) //will show Rs before price being appended
document.getElementById("abc123").style.visibility="visible";
		
}



function resume(){

var a=document.getElementsByTagName("img");
var i;
var m = document.getElementById("abc123");

for (i=0; i < a.length ; i++) {
	
	if (m.src == a[i].src && a[i].id != m.id ) {
		
		m.style.visibility="hidden";
		a[i].style.visibility="visible";

	} 	

}     



}




//______________ADD TO CART BUTTON/ICON__________________________
var cartflag = 0;
var cart = [];
var n= 0;
var cart1 = [];
function AddToCart(){

	$('#success_message').fadeIn().html("<span style='font-size:50px' > &#10004; </span>");
	setTimeout(function () { $('#success_message').fadeOut("slow"); }, 1500);

	// if (cartflag == 0) {
	// 	cartflag=1;
	// 	document.getElementById("CartID").src="Assets/filled-cart.png"; 
	// }

	var x = document.getElementById("1");
	var a = x.options[x.selectedIndex].value;
	
	var y = document.getElementById("2");
	var b = y.options[y.selectedIndex].value;
	
	var str = document.getElementById("abc123").src;
	var res = str.split("Assets/");
    var res2 = res[1].split(".");
    var product = {
    	id :  res2[0].concat(a),
    	qty : b
    }
	
	 ab = parseInt(b);
		n = n+ ab;
	
	document.getElementById('number').innerHTML = n;


var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "ajax.php", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send('cart='+JSON.stringify(product));


var xhttp1 = new XMLHttpRequest();
  xhttp1.open("POST", "ajax4.php", true);
xhttp1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp1.send('cart='+n);
		




}


//-----------------s-------------------  PRICE -----------------------------------------//
function pricedisplay(){
	
	var price;
	var x = document.getElementById("1");
	var a = x.options[x.selectedIndex].value;
	var y = document.getElementById("2");
	var b = y.options[y.selectedIndex].value;
	var ab = parseInt(b);
	var str = document.getElementById("abc123").src;
	var res = str.split("Assets/");
    var res2 = res[1].split(".");
	var res3 =  res2[0];

	var index = search_descript_price(res3.concat(a));
	price = Descrp_price[index][1];
	
	
	var multi = price * ab;
	
	document.getElementById("price1").innerHTML=multi;
	
}




				//________________CART TABLE LOGIC____________________________________





function cart_table_remove(x){
	var price = 0;
	var b = x.parentNode.parentNode;
	var c = document.getElementById("table_body");
	c.removeChild(b);
	


	var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "ajax2.php", true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

    	
    }
  };
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
var id_number = b.id; //storing id attribute
xhttp.send(`id=${id_number}`);

if (c.firstChild == null ) {
		document.getElementById("subtotalvalue").innerHTML = "0";
		document.getElementById("totalvalue").innerHTML = "0";		
	}
	else{
		var sibling = document.getElementById("table_body").firstElementChild;
		while(sibling != null){
			price += parseInt(sibling.lastElementChild.previousElementSibling.innerHTML);
			sibling = sibling.nextSibling;
		}


		document.getElementById("subtotalvalue").innerHTML = price;

		if (price == 0){
			document.getElementById("totalvalue").innerHTML= 0;
		}
		else{
			document.getElementById("totalvalue").innerHTML=price+150;
		}

		
	}


}


//-------------------------------------------------------GETTING PIZZA PRICE AND DESCRIPTION-------------------------//

var Descrp_price; //GLOBAL VARIABLE

function getpagename(){

	var pagename = document.getElementById("title").innerHTML;
	var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "ajax3.php", true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

    	//console.log(this.responseText);
    	Descrp_price = JSON.parse(this.responseText);
    }
  };
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("pagename="+pagename);

}


function search_descript_price(imagename){

	for (var i = 0; i < Descrp_price.length; i++) {
		var n = Descrp_price[i][4].includes(imagename);
		if (n == true) {
			return i;
		}
	}


}


//-----------------------------------ADMIN AREA--------------------------// 
var User_search_result; //GLOBAL
var searchtype; //GLOBAL

function adminsearch(){

	
	var category = "userdetails";
	var searchquery = document.getElementById("searchquery").value;
	var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "adminsearch.php", true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

    	console.log(this.responseText);
    	User_search_result=JSON.parse(this.responseText);
		if (searchtype == "Name" || searchtype == "Phone" || searchtype == "Email" || searchtype == "Address" ) {
    		SearchResult_By_username();
    	}else if (searchtype == "Product Name" || searchtype == "Product ID") {
    		SearchResult_By_product();
    	}

    	
    }
  };
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("searchquery="+searchquery+"&searchType="+searchtype+"&searchcategory="+category);
}


function on_searchType_click(x){
	searchtype=x.innerHTML;          
        }





function SearchResult_By_username(){

			removePreviousTable();
	
			var node5 = document.createElement("TH");
			var node5_textnode = document.createTextNode("Name");
			node5.appendChild(node5_textnode);
			

			var node6 = document.createElement("TH");
			var node6_textnode = document.createTextNode("Email");
			node6.appendChild(node6_textnode);

			var node7 = document.createElement("TH");
			var node7_textnode = document.createTextNode("Phone");
			node7.appendChild(node7_textnode);

			var node8 = document.createElement("TH");
			var node8_textnode = document.createTextNode("Address");
			node8.appendChild(node8_textnode);

			var tr_for_th_node = document.createElement("TR");
			tr_for_th_node.appendChild(node5);
			tr_for_th_node.appendChild(node6);
			tr_for_th_node.appendChild(node7);
			tr_for_th_node.appendChild(node8);
		

			var thead_node = document.createElement("thead");
			thead_node.appendChild(tr_for_th_node);
			
			var nodeforhead = document.createAttribute("class");
	nodeforhead.value ="headcss thead-dark";
	thead_node.setAttributeNode(nodeforhead);
			

			var table_node = document.createElement("table");
			var table_node_id = document.createAttribute("id"); table_node_id.value ="result_table";
			table_node.setAttributeNode(table_node_id);
			var nodefortable1 = document.createAttribute("class");
			nodefortable1.value ="table table-bordered table-hover table-striped";
			table_node.setAttributeNode(nodefortable1); 

		

			table_node.appendChild(thead_node);

			var tableBody_node = document.createElement("tbody");
			var tableBody_node_id = document.createAttribute("id"); tableBody_node_id.value ="table_body";
			tableBody_node.setAttributeNode(tableBody_node_id);

			table_node.appendChild(tableBody_node);

	
	for (var i = 0; i < User_search_result.length; i++) {

	
			var node1 = document.createElement("TD");
			var node2 = document.createElement("TD");
			var node3 = document.createElement("TD");
			var node4 = document.createElement("TD");
	


			var node_id1 = document.createAttribute("id"); node_id1.value ="user_name";
			node1.setAttributeNode(node_id1);

			var a = document.createElement("a");
			var a_onclick = document.createAttribute("onclick"); a_onclick.value ="click_on_username(this)";
			a.setAttributeNode(a_onclick);
			var a_style = document.createAttribute("style"); a_style.value ="color:blue; text-decoration: underline; cursor: pointer; cursor: hand;";
			a.setAttributeNode(a_style);


			var node_id2 = document.createAttribute("id"); node_id2.value ="user_phone";
			node2.setAttributeNode(node_id2);

			var node_id3 = document.createAttribute("id"); node_id3.value ="user_email";
			node3.setAttributeNode(node_id3);

			var node_id4 = document.createAttribute("id"); node_id4.value ="user_address";
			node4.setAttributeNode(node_id4);


			var a_textnode = document.createTextNode(User_search_result[i][1]);
			a.appendChild(a_textnode);
			node1.appendChild(a);

			var node2_textnode = document.createTextNode(User_search_result[i][2]);
			node2.appendChild(node2_textnode);

			var node3_textnode = document.createTextNode(User_search_result[i][3]);
			node3.appendChild(node3_textnode);

			var node4_textnode = document.createTextNode(User_search_result[i][4]);
			node4.appendChild(node4_textnode);

			var main_node = document.createElement("TR");
			var main_node_id = document.createAttribute("id"); main_node_id.value = i ;
			main_node.setAttributeNode(main_node_id);


			main_node.appendChild(node1);
			main_node.appendChild(node2);
			main_node.appendChild(node3);
			main_node.appendChild(node4);


			tableBody_node.appendChild(main_node);
	

				}
				document.getElementById("searchresultbodydiv").appendChild(table_node);
								
}




function removePreviousTable(){
	if (document.getElementById("result_table")) {
		var x = document.getElementById("result_table");
		x.parentNode.removeChild(x);
	}

}




function SearchResult_By_product(){

			removePreviousTable();
	
			var node5 = document.createElement("TH");
			var node5_textnode = document.createTextNode("Product ID");
			node5.appendChild(node5_textnode);

			var node6 = document.createElement("TH");
			var node6_textnode = document.createTextNode("Name");
			node6.appendChild(node6_textnode);

			var node7 = document.createElement("TH");
			var node7_textnode = document.createTextNode("Price");
			node7.appendChild(node7_textnode);

			var node8 = document.createElement("TH");
			var node8_textnode = document.createTextNode("Size");
			node8.appendChild(node8_textnode);

			var node9 = document.createElement("TH");
			var node9_textnode = document.createTextNode("Description");
			node9.appendChild(node9_textnode);

			var tr_for_th_node = document.createElement("TR");
			tr_for_th_node.appendChild(node5);
			tr_for_th_node.appendChild(node6);
			tr_for_th_node.appendChild(node7);
			tr_for_th_node.appendChild(node8);
			tr_for_th_node.appendChild(node9);


			var thead_node = document.createElement("thead");
			thead_node.appendChild(tr_for_th_node);
			var nodeforhead = document.createAttribute("class");
			nodeforhead.value ="headcss thead-dark";
			thead_node.setAttributeNode(nodeforhead);

			var table_node = document.createElement("table");
			var table_node_id = document.createAttribute("id"); table_node_id.value ="result_table";
			table_node.setAttributeNode(table_node_id);

			table_node.appendChild(thead_node);
			var nodefortable1 = document.createAttribute("class");
			nodefortable1.value ="table table-bordered table-hover table-striped";
			table_node.setAttributeNode(nodefortable1); 

		
			var tableBody_node = document.createElement("tbody");
			var tableBody_node_id = document.createAttribute("id"); tableBody_node_id.value ="table_body";
			tableBody_node.setAttributeNode(tableBody_node_id);

			table_node.appendChild(tableBody_node);

	
	for (var i = 0; i < User_search_result.length; i++) {

	
			var node1 = document.createElement("TD");
			var node2 = document.createElement("TD");
			var node3 = document.createElement("TD");
			var node4 = document.createElement("TD");
			var node5 = document.createElement("TD");
	


			var node_id1 = document.createAttribute("id"); node_id1.value ="product_ID";
			node1.setAttributeNode(node_id1);

			var node_id2 = document.createAttribute("id"); node_id2.value ="product_Name";
			node2.setAttributeNode(node_id2);

			var node_id3 = document.createAttribute("id"); node_id3.value ="product_Price";
			node3.setAttributeNode(node_id3);

			var node_id4 = document.createAttribute("id"); node_id4.value ="product_Size";
			node4.setAttributeNode(node_id4);

			var node_id5 = document.createAttribute("id"); node_id5.value ="product_Description";
			node5.setAttributeNode(node_id5);


			var node1_textnode = document.createTextNode(User_search_result[i][0]);
			node1.appendChild(node1_textnode);

			var node2_textnode = document.createTextNode(User_search_result[i][1]);
			node2.appendChild(node2_textnode);

			var node3_textnode = document.createTextNode(User_search_result[i][2]);
			node3.appendChild(node3_textnode);

			var node4_textnode = document.createTextNode(User_search_result[i][3]);
			node4.appendChild(node4_textnode);

			var node5_textnode = document.createTextNode(User_search_result[i][4]);
			node5.appendChild(node5_textnode);

			var main_node = document.createElement("TR");
			var main_node_id = document.createAttribute("id"); main_node_id.value = i ;
			main_node.setAttributeNode(main_node_id);


			main_node.appendChild(node1);
			main_node.appendChild(node2);
			main_node.appendChild(node3);
			main_node.appendChild(node4);
			main_node.appendChild(node5);


			tableBody_node.appendChild(main_node);
	

				}
				document.getElementById("searchresultbodydiv").appendChild(table_node);

}



function click_on_username(x){


	var fid = x.parentNode.parentNode.id;
	var id = User_search_result[fid][0];

	var category = "userorders";
	var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "adminsearch.php", true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

    	console.log(this.responseText);
    	User_search_result=JSON.parse(this.responseText);
    	SearchResult_By_UserOrders();    	
    	
    }
  };
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("searchquery="+id+"&searchcategory="+category);

}



function SearchResult_By_UserOrders(){
	
			removePreviousTable();


			var node5 = document.createElement("TH");
			var node5_textnode = document.createTextNode("Order ID");
			node5.appendChild(node5_textnode);

			var node6 = document.createElement("TH");
			var node6_textnode = document.createTextNode("Date and Time");
			node6.appendChild(node6_textnode);	
			

			var tr_for_th_node = document.createElement("TR");
			tr_for_th_node.appendChild(node5);
			tr_for_th_node.appendChild(node6);

			var thead_node = document.createElement("thead");
			thead_node.appendChild(tr_for_th_node);
			var nodeforhead = document.createAttribute("class");
			nodeforhead.value ="headcss thead-dark";
			thead_node.setAttributeNode(nodeforhead);


			var table_node = document.createElement("table");
			var table_node_id = document.createAttribute("id"); table_node_id.value ="result_table";
			table_node.setAttributeNode(table_node_id);
			var nodefortable1 = document.createAttribute("class");
			nodefortable1.value ="table table-bordered table-hover table-striped";
			table_node.setAttributeNode(nodefortable1); 
			table_node.appendChild(thead_node);

			var tableBody_node = document.createElement("tbody");
			var tableBody_node_id = document.createAttribute("id"); tableBody_node_id.value ="table_body";
			tableBody_node.setAttributeNode(tableBody_node_id);

			table_node.appendChild(tableBody_node);

	
	for (var i = 0; i < User_search_result.length; i++) {

	
			var node1 = document.createElement("TD");
			var node2 = document.createElement("TD");
			

			var node_id1 = document.createAttribute("id"); node_id1.value ="Order_ID";
			node1.setAttributeNode(node_id1);

			var node_id2 = document.createAttribute("id"); node_id2.value ="DATE_TIME";
			node2.setAttributeNode(node_id2);


			var a = document.createElement("a");
			var a_onclick = document.createAttribute("onclick"); a_onclick.value ="click_on_orderid(this)";
			a.setAttributeNode(a_onclick);
			var a_style = document.createAttribute("style"); a_style.value ="color:blue; text-decoration: underline;cursor: pointer; cursor: hand;";
			a.setAttributeNode(a_style);

			var a_textnode = document.createTextNode(User_search_result[i][0]);
			a.appendChild(a_textnode);
			node1.appendChild(a);

			var node2_textnode = document.createTextNode(User_search_result[i][1]);
			node2.appendChild(node2_textnode);


			var main_node = document.createElement("TR");
			var main_node_id = document.createAttribute("id"); main_node_id.value = i ;
			main_node.setAttributeNode(main_node_id);


			main_node.appendChild(node1);
			main_node.appendChild(node2);

			tableBody_node.appendChild(main_node);


	

				}
			document.getElementById("searchresultbodydiv").appendChild(table_node);
}



function click_on_orderid(x){


	var fid = x.parentNode.parentNode.id;
	var id = User_search_result[fid][0];

	var category = "orderitems";
	var xhttp = new XMLHttpRequest();
  	xhttp.open("POST", "adminsearch.php", true);
  	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

    	console.log(this.responseText);
    	User_search_result=JSON.parse(this.responseText);
    	SearchResult_By_OrderItems();    	
    	
    }
  };
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("searchquery="+id+"&searchcategory="+category);

}




function SearchResult_By_OrderItems(){

			removePreviousTable();
	
			var node5 = document.createElement("TH");
			var node5_textnode = document.createTextNode("Name");
			node5.appendChild(node5_textnode);

			var node6 = document.createElement("TH");
			var node6_textnode = document.createTextNode("Size");
			node6.appendChild(node6_textnode);

			var node7 = document.createElement("TH");
			var node7_textnode = document.createTextNode("Quantity");
			node7.appendChild(node7_textnode);

			var node8 = document.createElement("TH");
			var node8_textnode = document.createTextNode("Price");
			node8.appendChild(node8_textnode);

			var tr_for_th_node = document.createElement("TR");
			tr_for_th_node.appendChild(node5);
			tr_for_th_node.appendChild(node6);
			tr_for_th_node.appendChild(node7);
			tr_for_th_node.appendChild(node8);

			var thead_node = document.createElement("thead");
			thead_node.appendChild(tr_for_th_node);
			var nodeforhead = document.createAttribute("class");
			nodeforhead.value ="headcss thead-dark";
			thead_node.setAttributeNode(nodeforhead);

			var table_node = document.createElement("table");
			var table_node_id = document.createAttribute("id"); table_node_id.value ="result_table";
			table_node.setAttributeNode(table_node_id);

			table_node.appendChild(thead_node);

			var tableBody_node = document.createElement("tbody");
			var tableBody_node_id = document.createAttribute("id"); tableBody_node_id.value ="table_body";
			tableBody_node.setAttributeNode(tableBody_node_id);

			var nodefortable1 = document.createAttribute("class");
			nodefortable1.value ="table table-bordered table-hover table-striped";
			table_node.setAttributeNode(nodefortable1); 

			table_node.appendChild(tableBody_node);

	
	for (var i = 0; i < User_search_result.length; i++) {

	
			var node1 = document.createElement("TD");
			var node2 = document.createElement("TD");
			var node3 = document.createElement("TD");
			var node4 = document.createElement("TD");
	


			var node_id1 = document.createAttribute("id"); node_id1.value ="Ordered_Prdt_name";
			node1.setAttributeNode(node_id1);

			var node_id2 = document.createAttribute("id"); node_id2.value ="Ordered_Prdt_Size";
			node2.setAttributeNode(node_id2);

			var node_id3 = document.createAttribute("id"); node_id3.value ="Ordered_Prdt_Quantity";
			node3.setAttributeNode(node_id3);

			var node_id4 = document.createAttribute("id"); node_id4.value ="Ordered_Prdt_Price";
			node4.setAttributeNode(node_id4);


			var node1_textnode = document.createTextNode(User_search_result[i][0]);
			node1.appendChild(node1_textnode);

			var node2_textnode = document.createTextNode(User_search_result[i][1]);
			node2.appendChild(node2_textnode);

			var node3_textnode = document.createTextNode(User_search_result[i][2]);
			node3.appendChild(node3_textnode);

			var int_quantity = parseInt(User_search_result[i][2]);
			var int_price = parseInt(User_search_result[i][3]);

			var node4_textnode = document.createTextNode(int_price*int_quantity);
			node4.appendChild(node4_textnode);

			var main_node = document.createElement("TR");
			var main_node_id = document.createAttribute("id"); main_node_id.value = i ;
			main_node.setAttributeNode(main_node_id);


			main_node.appendChild(node1);
			main_node.appendChild(node2);
			main_node.appendChild(node3);
			main_node.appendChild(node4);


			tableBody_node.appendChild(main_node);
	

				}
				document.getElementById("searchresultbodydiv").appendChild(table_node);

}

