function down(){
	var t="";
	t=document.title;
	var k = document.getElementById("3");
	var str = document.getElementById("abc123").src;
	var res = str.split("Assets/");
    var res2 = res[1].split(".");
	var res3 =  res2[0];
	
	if(res3 == "dessert9"){
	
		
		k.style.visibility = "visible";
		k.style.fontSize = "small";
		k.style.marginLeft = "2px";
	}
	else{
		k.style.visibility = "hidden";
		k.style.fontSize = "xx-small";
		k.style.marginLeft = "10px";
	}
	
	
}

	

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
	document.getElementById("abc123").value=x.value;


	x.style.visibility="hidden";
var t = document.getElementById("overlaytext1");
	if (m == "http://localhost/pizzeria/Assets/menu1.png") {
		t.innerHTML='<span style="font-size:21px; font-family:Pacifico;">A recipe of traditional chicken tikka, onions & topped with mozzarell a cheese<p id="price1"></p></span>';
}																																																			
	else if (m == "http://localhost/pizzeria/Assets/menu2.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:22px; font-family:Pacifico;">Green Chicken, Green Paper, Onion, Jalapeno, Green Olive & Alfreo<p id="price2"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu3.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:19px; font-family:Pacifico;">Green Chicken, Tandoori Chicken, Mushroom Italian Herb, Mix Creamy Sauce & Mozzarella Cheese<p id="price3"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu4.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:24px; font-family:Pacifico;">Marinated Chicken, Jalapeno, Italian Herb, Sweet Corn<p id="price4"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu5.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:17px; font-family:Pacifico;">A Delicious combination of shawarma chicken, onion,green pepper, jalapeno, mushrooms, olives & mozzarella cheese<p id="price5"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu6.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:20px; font-family:Pacifico;">A creamy recipe with malai boti chicken tomatoes, onion, green pepper creamy sauce & mozzarella cheese<p id="price6"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu7.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:21px; font-family:Pacifico;">Mushroom, Creamy Sauce, Fajita Chickken , Jalapino & Italian Herb<p id="price7"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu8.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:13.7px; font-family:Pacifico;">A Delight Blend Of Spicy Chicken , Chicken Sausages ,Chicken Tikka , Onion , Green Pepper, Mushroom, Mozzarella Cheese & Olive<p id="price8"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu9.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:20px; font-family:Pacifico;">A Tasty Combination of pepperoni, Beef Onion, Mushrooms black Olive & Mozzarella Cheese<p id="price9"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu10.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:15px; font-family:Pacifico;">A Blend Of Smoke Chicken ,Pepperoni ,Beef , Smoke Veal , Onion,Mushroom,Capsicum, Black Olive & Mozzarella Cheese<p id="price10"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu11.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:22px; font-family:Pacifico;">Afghani Chicken Onion Creamy Sauce & Mozzarella Cheese<p id="price11"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu12.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:21px; font-family:Pacifico;">A Tasty Tandoori Chicken ,Onion ,Tomatoes, Mozzarella Cheese<p id="price12"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu13.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:20px; font-family:Pacifico;">Traditional Pakistani Recipe With Chicken Tikka ,Onion & Mozzarella Cheese<p id="price13"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu14.png") {
		t.innerHTML=t.innerHTML='<span style="font-size:19px; font-family:Pacifico;">A Tasty Combination Of Chicken Fajita,Onion,Green Pepper & Mozzarella Cheese<p id="price14"></p></span>' ;
	}
	else if (m == "http://localhost/pizzeria/Assets/menu15.png") {
		t.innerHTML=t.innerHTML='<span style="font-size:17px; font-family:Pacifico;">Just To Spice Your Taste Buds With Chicken fajita, Onion, Green Pepper Jalapeno &Mozzarella Cheese<p id="price15"></p></span>' ;
	}
	else if (m == "http://localhost/pizzeria/Assets/menu16.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:20px; font-family:Pacifico;">If You Like It Hot Try Beef Hot,Jalapeno ,Onion,Tomato & Mozzarella Cheese<p id="price16"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu17.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:22px; font-family:Pacifico;">A Delicious Combination Of Pepperoni & Mozzarella Cheese<p id="price17"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu18.png") {
		t.innerHTML=t.innerHTML='<span style="font-size:14px; font-family:Pacifico;">Have It European Style topped with Chicken Sausages,Smoked Chicken Mushroom, Green Pepper,Tomato Olive & Mozzarella Cheese<p id="price18"></p></span>' ;
	}
	else if (m == "http://localhost/pizzeria/Assets/menu19.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:22px; font-family:Pacifico;">If You Love Just Cheese Enjoy 100% Mozzarella Cheese<p id="price19"></p></span>' ;
	}
	else if (m == "http://localhost/pizzeria/Assets/menu20.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:20px; font-family:Pacifico;"> Colorful Combination OF Onion ,Mushroom,Green Pepper,Olive,tomatoes & Mozzarella Cheese<p id="price20"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/pasta1.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:15px; font-family:Pacifico;">Pasta with spicy chicken cooked in creamy sauce & mozzarella cheese served with garlic bread & drink<p id="pricep1"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/pasta2.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:17px; font-family:Pacifico;">Pasta with spicy chicken cooked in spicy creamy sauce & mozzarella cheese served with garlic bread & drink<p id="pricep2"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/pasta3.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:15px; font-family:Pacifico;">Pasta with cheesy packed chicken cooked in special sauce of cheese & plenty served with garlic bread & drink<p id="pricep3"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/pasta4.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:16px; font-family:Pacifico;">Layers of lasagne with cream sauce and beef sauce Mozzarella cheese topped with cheese served with garlic bread & drink<p id="pricep4"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/pasta5.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:16px; font-family:Pacifico;">Layers of lasagne filled with chicken cream sauce topped with mozzarella cheese served with garlic bread & drink<p id="pricep5"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/pasta6.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:18px; font-family:Pacifico;">Topped with mozzarella cheese meat sauce mushrooms & noddles served with garlic bread & drink<p id="pricep6"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/dessert1.png") {
		 t.innerHTML='<span style="font-size:25px; font-family:Pacifico;"><br>ICE CREAM (2 SCOOPS )<p id="priceppp1"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/dessert2.png") {
	 t.innerHTML='<span style="font-size:25px; font-family:Pacifico;"><br>ICE CREAM (2 SCOOPS )<p id="priceppp2"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/dessert3.png") {
		 t.innerHTML='<span style="font-size:25px; font-family:Pacifico;"><br>ICE CREAM (2 SCOOPS )<p id="priceppp3"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/dessert4.png") {
		 t.innerHTML='<span style="font-size:25px; font-family:Pacifico;"><br>ICE CREAM (2 SCOOPS )<p id="priceppp4"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/dessert5.png") {
	 t.innerHTML='<span style="font-size:18px; font-family:Pacifico;">A dense, single-layer chocolate cake similar to a brownie, although moister with more chocolate<p id="priceppp5"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/dessert6.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><p id="priceppp6"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/dessert7.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"<p id="priceppp7"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/dessert8.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><p id="priceppp8"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/dessert9.png") {
		 t.innerHTML='<span style="font-size:25px; font-family:Pacifico;"><br>Strawberry, Mango, Chocolate, Vanilla<p id="priceppp9"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app1.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><p id="pricepp1"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app2.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><p id="pricepp2"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app3.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><p id="pricepp3"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app4.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><p id="pricepp4"></p></span>';
	}
		else if (m == "http://localhost/pizzeria/Assets/app5.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><p id="pricepp5"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app6.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><p id="pricepp6"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app7.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><p id="pricepp7"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app8.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><p id="pricepp8"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app9.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><p id="pricepp9"></p></span>';
	}
		else if (m == "http://localhost/pizzeria/Assets/ap10.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><p id="pricepp10"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app11.png") {
		 t.innerHTML='<span style="font-size:16px; font-family:Pacifico;">Made with tantalizing hot sauce smoked chicken and imported jalapeno served with a garnish of green pepper<p id="pricepp11"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app12.png") {
		 t.innerHTML='<span style="font-size:18px; font-family:Pacifico;">A prelude to a perfect meal - our very own thick chicken soup with sweet corn chicken<p id="pricepp12"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app13.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><p id="pricepp13"></p></span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app14.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><p id="pricepp14"></p></span>';
	}
		else if (m == "http://localhost/pizzeria/Assets/app15.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><p id="pricepp15"></p></span>';
	}





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

function AddToCart(){

	$('#success_message').fadeIn().html("<span style='font-size:50px' > &#10004; </span>");
	setTimeout(function () { $('#success_message').fadeOut("slow"); }, 1500);

	if (cartflag == 0) {
		cartflag=1;
		document.getElementById("CartID").src="Assets/filled-cart.png"; 
	}

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
	




var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

    	// console.log(this.responseText);
    }
  };
  xhttp.open("POST", "ajax.php", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send('cart='+JSON.stringify(product));


		




}

function orderList(){
	alert(cart);
}

//------------------------------------  PRICE -----------------------------------------//
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

	if(a=="small"){
		price = 360; }
		// if(res3 == "menu1"){
		// 	price = 330;
		// }
		// else if(res3 == "menu4"){
		// 	price = 500;
		// }
		// else{
		// price = 360;}
	
	else if(a=="regular"){
		if(res3 == "menu1" || res3 == "menu11" || res3 == "menu12" || res3 == "menu13" || res3 == "menu14" || res3 == "menu15" || res3 == "menu19")
		{price= 700;
	}
	else{
		price = 800;
	}
}
	else{
		if(res3 == "menu1" || res3 == "menu11" || res3 == "menu12" || res3 == "menu13" || res3 == "menu14" || res3 == "menu15" || res3 == "menu19")
			{price= 1050;
		}
		else{
			price = 1150;
		}
	
	}
	var multi = price * ab;
	
	
	
//  ---------------------------CONTAINER PRICE UPDATED FOR EVERY IMAGE---------------------------------------//
for (var i = 1; i <= 20; i++) {
	// for(var v = 1; v <= i; v++){

		if(res3 == "menu"+i)
    document.getElementById("price" + i).innerHTML="&emsp;&emsp;&emsp;Rs "+multi;
}}

// }

function pricedisplay2(){
	
	var price = 380;
	var y = document.getElementById("2");
	var b = y.options[y.selectedIndex].value;
	var ab = parseInt(b);
	var str = document.getElementById("abc123").src;
	var res = str.split("Assets/");
    var res2 = res[1].split(".");
	var res3 =  res2[0];
	var multi = price * ab;
	for (var i = 1; i <= 6; i++) {
		if(res3 == "pasta"+i)

				document.getElementById("pricep"+i).innerHTML="&emsp;&emsp;&emsp;&emsp;Rs "+multi;
	}
}

	
function pricedisplay3(){
	
	var y = document.getElementById("2");
	var b = y.options[y.selectedIndex].value;
	var ab = parseInt(b);
	var str = document.getElementById("abc123").src;
	var res = str.split("Assets/");
    var res2 = res[1].split(".");
	var res3 =  res2[0];
	var price;
	if(res3 == "app1" || res3 == "app9"){
		price = 250;
	}
	else if(res3 == "app2" || res3 == "app5"){
		price = 120;
	}
	else if(res3 == "app3" || res3 == "app4"){
		price = 160;
	}
	else if(res3 == "app6" || res3 == "app14" || res3 == "app15"){
		price = 200;
	}
	else if(res3 == "app8" || res3 == "app11" || res3 == "app12"){
		price = 130;
	}
	else if(res3 == "app6"){
		price = 180;
	}
	else if(res3 == "app13"){
		price = 400;
	}
	else{
		price = 300;
	}
	
	var multi = price * ab;
	for (var i = 1; i <= 15; i++) {
		if(res3 == "app"+i)

				document.getElementById("pricepp"+i).innerHTML="<br>&emsp;&emsp;Rs "+multi;
	}}

	
function pricedisplay4(){
	
	var price;
	var x = document.getElementById("3");
	var a = x.options[x.selectedIndex].value;
	var y = document.getElementById("2");
	var b = y.options[y.selectedIndex].value;
	var ab = parseInt(b);
	var str = document.getElementById("abc123").src;
	var res = str.split("Assets/");
    var res2 = res[1].split(".");
	var res3 =  res2[0];
	if(res3=="dessert1" || res3 == "dessert2" || res3 == "dessert3" || res3 == "dessert4"){
		price = 170;
	}
	else if(res3=="dessert6" || res3 == "dessert7" || res3 == "dessert8"){
		price = 100;
	}
	else if(res3 == "dessert9"){
		price = 120;
	}
	else{
		price = 300;
	}
	var multi = price * ab;

	for (var i = 1; i <= 9; i++) {
		if(res3 == "dessert"+i)
				document.getElementById("priceppp"+i).innerHTML="&emsp;&emsp;&emsp;&emsp;Rs "+multi;
	}}

	
	// if(res3 == "pasta1"){
	// 	price = 380;
	// 	var multi = price * ab;
	// 	document.getElementById("price21").innerHTML="&emsp;&emsp;&emsp;&emsp;Rs "+multi;
	// }
	// else if(res3 == "pasta2"){
	// 	price = 380;
	// 	var multi = price * ab;
	// 	document.getElementById("price22").innerHTML="&emsp;&emsp;&emsp;&emsp;Rs "+multi;
	// }
	// else if(res3 == "pasta3"){
	// 	price = 380;
	// 	var multi = price * ab;
	// 	document.getElementById("price23").innerHTML="&emsp;&emsp;&emsp;&emsp;Rs "+multi;
	// }
	// if(res3 == "pasta4"){
	// 	price = 380;
	// 	var multi = price * ab;
	// 	document.getElementById("price24").innerHTML="&emsp;&emsp;&emsp;&emsp;Rs "+multi;
	// }
	// if(res3 == "pasta5"){
	// 	price = 380;
	// 	var multi = price * ab;
	// 	document.getElementById("price25").innerHTML="&emsp;&emsp;&emsp;&emsp;Rs "+multi;
	// }
	// else{
	// 	price = 380;
	// 	var multi = price * ab;
	// 	document.getElementById("price26").innerHTML="&emsp;&emsp;&emsp;&emsp;Rs "+multi;
	// }

	// for (var i = 1; i <= 26; i++) {
	// 	// for(var v = 1; v <= i; v++){
	// 		for(var v = i; v <= 6; v++)
	// 		if(res3 == "pasta"+v)

	// 	document.getElementById("price" + i).innerHTML="&emsp;&emsp;&emsp;Rs "+multi;
	// } 
// 	// for(var i = 1; i <= 6 ; i++){
// 		 for(var v = 21; v <= 26; v++){
// 			 for(var i = 1; v<=6 ; i++)
// 		  if(res3 == "pasta" + i)
// 		document.getElementById("price" + v).innerHTML="&emsp;&emsp;&emsp;Rs "+multi;   }
// // }}

function set(){
	var elements = document.getElementsByTagName("select")
	for(i=0; i < elements.length ; i++){
	 elements[i].selectedIndex= 0;
	}

}



				//________________CART TABLE LOGIC____________________________________


function cart_table1(){
	
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

	var node1_textnode = document.createTextNode("pizzaname");
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


	var node4_textnode = document.createTextNode("pizzaprice");
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

function cart_table_remove(x){
	
	
	var b = x.parentNode.parentNode;
	var c = document.getElementById("table_body");
	c.removeChild(b);

}