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
			a[i].parentNode.style.visibility="visible";
			document.getElementById("abc12345").style.display="none";
			//a[i].parentNode.removeAttribute("visibility");

		}
	}
}

// a[i].parentNode.style.display = "inline-block";
		// a[i].style.visibility="visible";



function change(x){
	
	var m = x.firstChild;	
	var y=$(x).attr("id");
	
	var pos = $('#'+y).position();
		var intvaluetop =  pos.top+"px" ;
		var intvalueleft = (pos.left + 30)+"px";

		document.getElementById("abc12345").style.top=intvaluetop;
		document.getElementById("abc12345").style.left= intvalueleft;

	document.getElementById("abc123").src=m.src.slice(26);
	x.style.visibility="hidden";
	document.getElementById("abc12345").style.display = "block";
	// x.style.display="none";
	// var srcsplit = m.split("/");
	// var imagenamewithext = srcsplit[srcsplit.length-1];
	// var imagenamesplit = imagenamewithext.split(".");
	// var imagename = imagenamesplit[0];
	
	var imagename = m.src.slice(33,m.src.length - 4);
	console.log(imagename)
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
		// m.style.visibility="hidden";
		a[i].parentNode.style.visibility="visible";
		document.getElementById("abc12345").style.display="none";

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
    	Descrp_price = JSON.parse(this.responseText);
    }
  };
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("pagename="+pagename);

}


function search_descript_price(imagename){
	console.log(Descrp_price);
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

			var divtobedeleted_node = document.createElement("div");
			var divtobedeleted_node_id = document.createAttribute("id"); divtobedeleted_node_id.value ="DivToBeDeletedID";
			divtobedeleted_node.setAttributeNode(divtobedeleted_node_id);

			divtobedeleted_node.appendChild(table_node);


	
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
				document.getElementById("searchresultbodydiv").appendChild(divtobedeleted_node);
								
}




function removePreviousTable(){
	if (document.getElementById("result_table")) {
		var x = document.getElementById("DivToBeDeletedID");
		x.parentNode.removeChild(x);
	}else if (document.getElementById("DivToBeDeletedID")) {
		var x = document.getElementById("DivToBeDeletedID");
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

			var divtobedeleted_node = document.createElement("div");
			var divtobedeleted_node_id = document.createAttribute("id"); divtobedeleted_node_id.value ="DivToBeDeletedID";
			divtobedeleted_node.setAttributeNode(divtobedeleted_node_id);

			divtobedeleted_node.appendChild(table_node);

	
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
				document.getElementById("searchresultbodydiv").appendChild(divtobedeleted_node);

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

			var divtobedeleted_node = document.createElement("div");
			var divtobedeleted_node_id = document.createAttribute("id"); divtobedeleted_node_id.value ="DivToBeDeletedID";
			divtobedeleted_node.setAttributeNode(divtobedeleted_node_id);

			divtobedeleted_node.appendChild(table_node);

	
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
			document.getElementById("searchresultbodydiv").appendChild(divtobedeleted_node);
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

			var divtobedeleted_node = document.createElement("div");
			var divtobedeleted_node_id = document.createAttribute("id"); divtobedeleted_node_id.value ="DivToBeDeletedID";
			divtobedeleted_node.setAttributeNode(divtobedeleted_node_id);

			divtobedeleted_node.appendChild(table_node);

	
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
				document.getElementById("searchresultbodydiv").appendChild(divtobedeleted_node);

}




function get_products_image(){
	
	var pagename = document.getElementById("title").innerHTML;
	var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "ajax4.php", true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

    	creating_product_images(JSON.parse(this.responseText));
    }
  };
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("pagename="+pagename);

}


function creating_product_images(img_array){

	var img_srcs= new Array();
	for (var i = 0; i < img_array.length; i++) {
		var img_name=img_array[i].concat(".png");
		img_srcs.push("Assets/".concat(img_name));		
	}
	
	for (var i = 0; i < img_srcs.length; i++) {

		var img_src = document.createElement("img");
		var div_img = document.createElement("div");

		var div_node_id = document.createAttribute("id"); div_node_id.value = "img"+i;
		div_img.setAttributeNode(div_node_id);

		var div_node_style = document.createAttribute("style"); div_node_style.value ="display : inline-block;  width: 25%; position: relative; margin:0 30px 30px 30px" ;
		div_img.setAttributeNode(div_node_style);

		var img_node_src = document.createAttribute("src"); img_node_src.value = img_srcs[i] ;
		img_src.setAttributeNode(img_node_src);

		var img_node_style = document.createAttribute("style"); img_node_style.value ="  width:100%" 
		img_src.setAttributeNode(img_node_style);



		var div_node_mouseover = document.createAttribute("onmouseover"); div_node_mouseover.value ="change(this)" ;
		div_img.setAttributeNode(div_node_mouseover);

		div_img.appendChild(img_src);
		document.getElementById("b3b").appendChild(div_img);
		
		
	}

}

var pagesProductnamesFORADDProduct;

function Add_Product_Div(x){
	var purpose = x;
	var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "AddProduct.php", true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	pagesProductnamesFORADDProduct= JSON.parse(this.responseText);
    	if (purpose=="getpagesnames") {
    		show_AddProductPanel(pagesProductnamesFORADDProduct[0]);
    	}
    }
  };
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("purpose="+purpose);

}



function show_AddProductPanel(pages){
	
	removePreviousTable();
	var divtobedeleted_node = document.createElement("div");
	var mainDiv_node = document.createElement("div");
	var div1_node = document.createElement("div");
	var div2_node = document.createElement("div");
	var div3_node = document.createElement("div");
	var div4_node = document.createElement("div");
	var div5_node = document.createElement("div");
	var div6_node = document.createElement("div");
	var div7_node = document.createElement("div");

	var mainDiv_node_id = document.createAttribute("id"); mainDiv_node_id.value = "addProductdiv";
	mainDiv_node.setAttributeNode(mainDiv_node_id);

	var div1_node_id = document.createAttribute("id"); div1_node_id.value = "addProduct_namediv";
	div1_node.setAttributeNode(div1_node_id);

	var div2_node_id = document.createAttribute("id"); div2_node_id.value = "addProduct_IDdiv";
	div2_node.setAttributeNode(div2_node_id);

	var div3_node_id = document.createAttribute("id"); div3_node_id.value = "addProduct_pricediv";
	div3_node.setAttributeNode(div3_node_id);
	var div3_node_style = document.createAttribute("style"); div3_node_style.value = "display: none;";
	div3_node.setAttributeNode(div3_node_style);

	var div4_node_id = document.createAttribute("id"); div4_node_id.value = "addProduct_pagediv";
	div4_node.setAttributeNode(div4_node_id);

	var div5_node_id = document.createAttribute("id"); div5_node_id.value = "addProduct_descriptdiv";
	div5_node.setAttributeNode(div5_node_id);

	var div7_node_id = document.createAttribute("id"); div7_node_id.value = "addProduct_SRL_pricediv";
	div7_node.setAttributeNode(div7_node_id);
	var div7_node_style = document.createAttribute("style"); div7_node_style.value = "display: block;";
	div7_node.setAttributeNode(div7_node_style);


	var divtobedeleted_node_id = document.createAttribute("id"); divtobedeleted_node_id.value ="DivToBeDeletedID";
	divtobedeleted_node.setAttributeNode(divtobedeleted_node_id);

	// var node5 = document.createElement("TH");
	// 		var node5_textnode = document.createTextNode("Order ID");
	// 		node5.appendChild(node5_textnode);
	

	// var div1_textnode = document.createTextNode("Name: ");	
	// var div1_textnode1_id = document.createAttribute("id"); div1_textnode1_id.value = "nameproduct";
	// div1_textnode.setAttributeNode(div1_textnode1_id);

		var div1_name = document.createElement("label");
		var div1_textnode = document.createTextNode("Name: ");
		div1_name.appendChild(div1_textnode);

		var div1_textnode1_id = document.createAttribute("id"); div1_textnode1_id.value = "nameproduct";
		div1_name.setAttributeNode(div1_textnode1_id);



	var div1_input_node = document.createElement("input");
	var div1_input_node_type = document.createAttribute("type"); div1_input_node_type.value = "text";
	div1_input_node.setAttributeNode(div1_input_node_type);
	var div1_input_node_id = document.createAttribute("id"); div1_input_node_id.value = "ADD_productname";
	div1_input_node.setAttributeNode(div1_input_node_id);
	
	




	var div2_name = document.createElement("label");
		var div2_textnode = document.createTextNode("ID: ");
		div2_name.appendChild(div2_textnode);

		var div2_textnode2_id = document.createAttribute("id"); div2_textnode2_id.value = "idproduct";
		div2_name.setAttributeNode(div2_textnode2_id);


	var div2_input_node = document.createElement("input");
	var div2_input_node_type = document.createAttribute("type"); div2_input_node_type.value = "text";
	div2_input_node.setAttributeNode(div2_input_node_type);
	var div2_input_node_id = document.createAttribute("id"); div2_input_node_id.value = "ADD_productid";
	div2_input_node.setAttributeNode(div2_input_node_id);
	var div2_span_node = document.createElement("span");
	var div2_span_node_id = document.createAttribute("id"); div2_span_node_id.value = "addProduct_id_span";
	div2_span_node.setAttributeNode(div2_span_node_id);
	var div2_input_node_focusout = document.createAttribute("onfocusout"); div2_input_node_focusout.value = "ProductIDChecker()";
	div2_input_node.setAttributeNode(div2_input_node_focusout);



	var div3_name = document.createElement("label");
		var div3_textnode = document.createTextNode("Price: ");
		div3_name.appendChild(div3_textnode);

		var div3_textnode3_id = document.createAttribute("id"); div3_textnode3_id.value = "priceproduct";
		div3_name.setAttributeNode(div3_textnode3_id);

	var div3_input_node = document.createElement("input");
	var div3_input_node_type = document.createAttribute("type"); div3_input_node_type.value = "number";
	div3_input_node.setAttributeNode(div3_input_node_type);
	var div3_input_node_id = document.createAttribute("id"); div3_input_node_id.value = "ADD_productprice";
	div3_input_node.setAttributeNode(div3_input_node_id);
	

	var div4_textnode = document.createTextNode("Page: ");

	var div4_name = document.createElement("label");
		var div4_textnode = document.createTextNode("Page: ");
		div4_name.appendChild(div4_textnode);

		var div4_textnode4_id = document.createAttribute("id"); div4_textnode4_id.value = "pageproduct";
		div4_name.setAttributeNode(div4_textnode4_id);


	var div4_select_node = document.createElement("select");
	var div4_select_node_id = document.createAttribute("id"); div4_select_node_id.value = "addProduct_pagediv_selectid";
	div4_select_node.setAttributeNode(div4_select_node_id);
	var div4_select_node_onchange = document.createAttribute("onchange"); div4_select_node_onchange.value = "change_price_inputs()";
	div4_select_node.setAttributeNode(div4_select_node_onchange);

	for (var i = 0; i < pages.length; i++) {
		if (pages[i]=="All Dessert" || pages[i]=="All Pizzas" || pages[i]=="Appetizer") {
			continue;
		}else{
		var p = document.createElement("option");
		var o = document.createTextNode(pages[i]);
		p.appendChild(o);
		div4_select_node.appendChild(p);
		}
		
	}



	var div5_name = document.createElement("label");
	var div5_textnode = document.createTextNode("Description: ");
	div5_name.appendChild(div5_textnode);

	var div5_textnode5_id = document.createAttribute("id"); div5_textnode5_id.value = "descriptionproduct";
	div5_name.setAttributeNode(div5_textnode5_id);


	var div5_textarea_node = document.createElement("textarea");
	var div5_textarea_node_id = document.createAttribute("id"); div5_textarea_node_id.value = "addProduct_descriptdiv_textareaid";
	div5_textarea_node.setAttributeNode(div5_textarea_node_id);
	var div5_node_row = document.createAttribute("row"); div5_node_row.value = "4";
	div5_textarea_node.setAttributeNode(div5_node_row);
	var div5_node_column = document.createAttribute("column"); div5_node_column.value = "50";
	div5_textarea_node.setAttributeNode(div5_node_column);


	var div6_input_node = document.createElement("input");
	var div6_input_node_type = document.createAttribute("type"); div6_input_node_type.value = "file";
	div6_input_node.setAttributeNode(div6_input_node_type);
	var div6_input_node_name = document.createAttribute("name"); div6_input_node_name.value = "post-pic";
	div6_input_node.setAttributeNode(div6_input_node_name);
	var div6_textnode6_id = document.createAttribute("id"); div6_textnode6_id.value = "fileproduct";
	div6_input_node.setAttributeNode(div6_textnode6_id);


	var div7_textnode1 = document.createTextNode("Price small: ");
	var div7_textnode2 = document.createTextNode("Price regular: ");
	var div7_textnode3 = document.createTextNode("Price large: ");

	var div7_name1 = document.createElement("label");
	var div7_textnode1 = document.createTextNode("Price Small: ");
	div7_name1.appendChild(div7_textnode1);

	var div7_textnode1_id = document.createAttribute("id"); div7_textnode1_id.value = "smallproduct";
	div7_name1.setAttributeNode(div7_textnode1_id);

	var div7_name2 = document.createElement("label");
	var div7_textnode2 = document.createTextNode("Price Regular: ");
	div7_name2.appendChild(div7_textnode2);

	var div7_textnode2_id = document.createAttribute("id"); div7_textnode2_id.value = "regularproduct";
	div7_name2.setAttributeNode(div7_textnode2_id);

	var div7_name3 = document.createElement("label");
	var div7_textnode3 = document.createTextNode("Price Large: ");
	div7_name3.appendChild(div7_textnode3);

	var div7_textnode3_id = document.createAttribute("id"); div7_textnode3_id.value = "largeproduct";
	div7_name3.setAttributeNode(div7_textnode3_id);
	

	var div7_input_node1 = document.createElement("input");
	var div7_input_node1_type = document.createAttribute("type"); div7_input_node1_type.value = "number";
	div7_input_node1.setAttributeNode(div7_input_node1_type);
	var div7_input_node1_id = document.createAttribute("id"); div7_input_node1_id.value = "ADD_productprice_S";
	div7_input_node1.setAttributeNode(div7_input_node1_id);

	var div7_input_node2 = document.createElement("input");
	var div7_input_node2_type = document.createAttribute("type"); div7_input_node2_type.value = "number";
	div7_input_node2.setAttributeNode(div7_input_node2_type);
	var div7_input_node2_id = document.createAttribute("id"); div7_input_node2_id.value = "ADD_productprice_R";
	div7_input_node2.setAttributeNode(div7_input_node2_id);

	var div7_input_node3 = document.createElement("input");
	var div7_input_node3_type = document.createAttribute("type"); div7_input_node3_type.value = "number";
	div7_input_node3.setAttributeNode(div7_input_node3_type);
	var div7_input_node3_id = document.createAttribute("id"); div7_input_node3_id.value = "ADD_productprice_L";
	div7_input_node3.setAttributeNode(div7_input_node3_id);

	var div7_br1 = document.createElement("br");
	var div7_br2 = document.createElement("br");



	var add_button = document.createElement("button");
	var add_button_id = document.createAttribute("id"); add_button_id.value = "AddProduct_buttonid";
	add_button.setAttributeNode(add_button_id);
	var add_button_onclick = document.createAttribute("onclick"); add_button_onclick.value = "sendAddProductData(); ";
	add_button.setAttributeNode(add_button_onclick);

	var add_button_textnode = document.createTextNode("Add Product");
	add_button.appendChild(add_button_textnode);


	


	div1_node.appendChild(div1_name);
	div1_node.appendChild(div1_input_node);
	mainDiv_node.appendChild(div1_node);

	div2_node.appendChild(div2_name);
	div2_node.appendChild(div2_input_node);
	div2_node.appendChild(div2_span_node);
	mainDiv_node.appendChild(div2_node);

	div3_node.appendChild(div3_name);
	div3_node.appendChild(div3_input_node);
	mainDiv_node.appendChild(div3_node);

	div7_node.appendChild(div7_name1);
	div7_node.appendChild(div7_input_node1);
	div7_node.appendChild(div7_br1);
	div7_node.appendChild(div7_name2);
	div7_node.appendChild(div7_input_node2);
	div7_node.appendChild(div7_br2);
	div7_node.appendChild(div7_name3);
	div7_node.appendChild(div7_input_node3);
	mainDiv_node.appendChild(div7_node);
	


	div4_node.appendChild(div4_name);
	div4_node.appendChild(div4_select_node);
	mainDiv_node.appendChild(div4_node);

	div5_node.appendChild(div5_name);
	div5_node.appendChild(div5_textarea_node);
	mainDiv_node.appendChild(div5_node);

	div6_node.appendChild(div6_input_node);
	mainDiv_node.appendChild(div6_node);

	mainDiv_node.appendChild(add_button);

	divtobedeleted_node.appendChild(mainDiv_node);

	document.getElementById("searchresultbodydiv").appendChild(divtobedeleted_node);
}


function ProductIDChecker(){
	var flag = 0;
	entered_name= document.getElementById("ADD_productid").value;
	
	for (var i = 0; i < pagesProductnamesFORADDProduct[1].length; i++) {
			var productsname = pagesProductnamesFORADDProduct[1][i].toString();
		
		if (productsname.includes("small")) {
			
			var splited = productsname.split("small");
			if (entered_name == splited[0]) {
				
				document.getElementById("addProduct_id_span").innerHTML="*ID already exist";
				flag = 1;
				break;
			}
		}
		else if (productsname.includes("regular")) {
			var splited = productsname.split("regular");
			if (entered_name == splited[0]) {
				document.getElementById("addProduct_id_span").innerHTML="*ID already exist";
				flag = 1;
				break;
			}

		}
		else if (productsname.includes("large")) {
			var splited = productsname.split("large");
			if (entered_name == splited[0]) {
				document.getElementById("addProduct_id_span").innerHTML="*ID already exist";
				flag = 1;
				break;
			}

		}
	}
	if (flag!=1) {
		document.getElementById("addProduct_id_span").innerHTML=" ";
	}
	
	

}

function sendAddProductData(){
	
	if (document.getElementById("addProduct_id_span").innerHTML != "*ID already exist") {
		var name = document.getElementById("ADD_productname").value; 
		var ID = document.getElementById("ADD_productid").value;
		if (document.getElementById("addProduct_pricediv").style.display == "none") {
			var price = new Array();
			price.push(document.getElementById("ADD_productprice_S").value);
			price.push(document.getElementById("ADD_productprice_R").value);
			price.push(document.getElementById("ADD_productprice_L").value);
		}else{
			var price= document.getElementById("ADD_productprice").value; 
		}

		var description = document.getElementById("addProduct_descriptdiv_textareaid").value; 
		var pageselect = document.getElementById("addProduct_pagediv_selectid");
		var page = pageselect.options[pageselect.selectedIndex].value;
		var purpose = "sendAddProductData";
		var xhttp = new XMLHttpRequest();
  		xhttp.open("POST", "AddProduct.php", true);
  		xhttp.onreadystatechange = function() {
  			if (this.readyState == 4 && this.status == 200) {
  				console.log(this.responseText);
  				fac();
  				
  			}
  		};
  		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  		xhttp.send("purpose="+purpose+"&name="+name+"&ID="+ID+"&price="+price+"&description="+description+"&page="+page);



	}
}



 function fac(){
        var postPicData = document.querySelector("input[name='post-pic']");
      
        var postPic = postPicData.files[0];
         var formData = new FormData();
        formData.append("file", postPic);
        

        var xhttp = new XMLHttpRequest();
         xhttp.open("POST", "uploadfile.php", true);
         xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
         }
        };
        
        xhttp.send(formData);

    }


function change_price_inputs(){
	var x = document.getElementById("addProduct_pagediv_selectid");
	var a = x.options[x.selectedIndex].value;
	if (a == "Beef Pizzas" || a == "Chicken Pizza" || a == "Special Pizza") {
		document.getElementById("addProduct_pricediv").style.display="none";
		document.getElementById("addProduct_SRL_pricediv").style.display="block";
	}else{
		document.getElementById("addProduct_pricediv").style.display="block";
		document.getElementById("addProduct_SRL_pricediv").style.display="none";
	}

}