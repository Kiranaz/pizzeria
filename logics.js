function getpagename(){
	var t="";
	t=document.title;
	var z = "";
	z = document.src;
	if(z == "Assets/app2.png" &&  z == "Assets/app1.png"){
		var k = document.getElementById("1");
		k.style.visibility="visible";
		}	
	
	
	else if (t == 'All Pizzas' && t == "Beef Pizzas" && t == "Chicken Pizza" && t == "Special Pizza") {
		var k = document.getElementById("1");
		k.style.visibility="visible";			
	}

	else if (t == "Soup")
	{
		var k = document.getElementById("1");
		k.style.visibility="hidden";
	}

	else if (t == "Pasta")
	{
		var k = document.getElementById("1");
		k.style.visibility="hidden";
	}
	else if (t == "Salad")
	{
		var k = document.getElementById("1");
		k.style.visibility="hidden";
	}
	else if (t == "Rolls")
	{
		var k = document.getElementById("1");
		k.style.visibility="hidden";
	}
	else if (z == "Assets/app3.png")
	{
			var k = document.getElementById("1");
		k.style.visibility="hidden";

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
		t.innerHTML='<span style="font-size:21px; font-family:Pacifico;">A recipe of traditional chicken tikka, onions & topped with mozzarell a cheese<br>&emsp;&emsp;&emsp;Rs 360</span>';
}																																																			
	else if (m == "http://localhost/pizzeria/Assets/menu2.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:22px; font-family:Pacifico;">Green Chicken, Green Paper, Onion, Jalapeno, Green Olive & Alfreo<br>&emsp;&emsp;&emsp;Rs 360</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu3.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:19px; font-family:Pacifico;">Green Chicken, Tandoori Chicken, Mushroom Italian Herb, Mix Creamy Sauce & Mozzarella Cheese<br>&emsp;&emsp;&emsp;Rs 360</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu4.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:24px; font-family:Pacifico;">Marinated Chicken, Jalapeno, Italian Herb, Sweet Corn<br>&emsp;&emsp;&emsp; Rs 360</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu5.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:17px; font-family:Pacifico;">A Delicious combination of shawarma chicken, onion,green pepper, jalapeno, mushrooms, olives & mozzarella cheese<br>&emsp;&emsp;&emsp;Rs 360</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu6.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:20px; font-family:Pacifico;">A creamy recipe with malai boti chicken tomatoes, onion, green pepper creamy sauce & mozzarella cheese<br>&emsp;&emsp;&emsp; Rs 360</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu7.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:21px; font-family:Pacifico;">Mushroom, Creamy Sauce, Fajita Chickken , Jalapino & Italian Herb<br>&emsp;&emsp;&emsp; Rs 360</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu8.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:13.7px; font-family:Pacifico;">A Delight Blend Of Spicy Chicken , Chicken Sausages ,Chicken Tikka , Onion , Green Pepper, Mushroom, Mozzarella Cheese & Olive<br>&emsp;&emsp;&emsp;&emsp;Rs 360</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu9.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:20px; font-family:Pacifico;">A Tasty Combination of pepperoni, Beef Onion, Mushrooms black Olive & Mozzarella Cheese<br>&emsp;&emsp;&emsp; Rs 360</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu10.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:15px; font-family:Pacifico;">A Blend Of Smoke Chicken ,Pepperoni ,Beef , Smoke Veal , Onion,Mushroom,Capsicum, Black Olive & Mozzarella Cheese<br>&emsp;&emsp;&emsp; Rs 360</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu11.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:22px; font-family:Pacifico;">Afghani Chicken Onion Creamy Sauce & Mozzarella Cheese<br>&emsp;&emsp;&emsp; Rs 360</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu12.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:21px; font-family:Pacifico;">A Tasty Tandoori Chicken ,Onion ,Tomatoes, Mozzarella Cheese<br>&emsp;&emsp;&emsp; Rs 360</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu13.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:20px; font-family:Pacifico;">Traditional Pakistani Recipe With Chicken Tikka ,Onion & Mozzarella Cheese<br>&emsp;&emsp;&emsp; Rs 360</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu14.png") {
		t.innerHTML=t.innerHTML='<span style="font-size:19px; font-family:Pacifico;">A Tasty Combination Of Chicken Fajita,Onion,Green Pepper & Mozzarella Cheese<br>&emsp;&emsp;&emsp; Rs 360</span>' ;
	}
	else if (m == "http://localhost/pizzeria/Assets/menu15.png") {
		t.innerHTML=t.innerHTML='<span style="font-size:17px; font-family:Pacifico;">Just To Spice Your Taste Buds With Chicken fajita, Onion, Green Pepper Jalapeno &Mozzarella Cheese<br>&emsp;&emsp;&emsp; Rs 360</span>' ;
	}
	else if (m == "http://localhost/pizzeria/Assets/menu16.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:20px; font-family:Pacifico;">If You Like It Hot Try Beef Hot,Jalapeno ,Onion,Tomato & Mozzarella Cheese<br>&emsp;&emsp;&emsp; Rs 360</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu17.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:22px; font-family:Pacifico;">A Delicious Combination Of Pepperoni & Mozzarella Cheese<br>&emsp;&emsp;&emsp; Rs 360</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/menu18.png") {
		t.innerHTML=t.innerHTML='<span style="font-size:14px; font-family:Pacifico;">Have It European Style topped with Chicken Sausages,Smoked Chicken Mushroom, Green Pepper,Tomato Olive & Mozzarella Cheese<br>&emsp;&emsp;&emsp; Rs 360</span>' ;
	}
	else if (m == "http://localhost/pizzeria/Assets/menu19.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:22px; font-family:Pacifico;">If You Love Just Cheese Enjoy 100% Mozzarella Cheese<br>&emsp;&emsp;&emsp; Rs 360</span>' ;
	}
	else if (m == "http://localhost/pizzeria/Assets/menu20.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:20px; font-family:Pacifico;"> Colorful Combination OF Onion ,Mushroom,Green Pepper,Olive,tomatoes & Mozzarella Cheese<br>&emsp;&emsp;&emsp; Rs 360</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/pasta1.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:15px; font-family:Pacifico;">Pasta with spicy chicken cooked in creamy sauce & mozzarella cheese served with garlic bread & drink<br>&emsp;&emsp;&emsp;&emsp;&emsp; Rs 380</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/pasta2.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:17px; font-family:Pacifico;">Pasta with spicy chicken cooked in spicy creamy sauce & mozzarella cheese served with garlic bread & drink<br>&emsp;&emsp;&emsp;&emsp;&emsp; Rs 380</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/pasta3.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:15px; font-family:Pacifico;">Pasta with cheesy packed chicken cooked in special sauce of cheese & plenty served with garlic bread & drink<br>&emsp;&emsp;&emsp;&emsp;&emsp; Rs 380</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/pasta4.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:16px; font-family:Pacifico;">Layers of lasagne with cream sauce and beef sauce Mozzarella cheese topped with cheese served with garlic bread & drink<br>&emsp;&emsp;&emsp;&emsp;&emsp; Rs 380</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/pasta5.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:16px; font-family:Pacifico;">Layers of lasagne filled with chicken cream sauce topped with mozzarella cheese served with garlic bread & drink<br>&emsp;&emsp;&emsp;&emsp;&emsp; Rs 380</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/pasta6.png") {
		t.innerHTML= t.innerHTML='<span style="font-size:18px; font-family:Pacifico;">Topped with mozzarella cheese meat sauce mushrooms & noddles served with garlic bread & drink<br>&emsp;&emsp;&emsp;&emsp; Rs 380</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/dessert1.png") {
		 t.innerHTML='<span style="font-size:25px; font-family:Pacifico;"><br>ICE CREAM (2 SCOOPS )<br>&emsp;&emsp; Rs 170</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/dessert2.png") {
	 t.innerHTML='<span style="font-size:25px; font-family:Pacifico;"><br>ICE CREAM (2 SCOOPS )<br>&emsp;&emsp; Rs 170</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/dessert3.png") {
		 t.innerHTML='<span style="font-size:25px; font-family:Pacifico;"><br>ICE CREAM (2 SCOOPS )<br>&emsp;&emsp; Rs 170</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/dessert4.png") {
		 t.innerHTML='<span style="font-size:25px; font-family:Pacifico;"><br>ICE CREAM (2 SCOOPS )<br>&emsp;&emsp; Rs 170</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/dessert5.png") {
	 t.innerHTML='<span style="font-size:18px; font-family:Pacifico;">A dense, single-layer chocolate cake similar to a brownie, although moister with more chocolate<br>&emsp;&emsp; Rs 300</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/dessert6.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><br><br>&emsp;&emsp; Rs 100</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/dessert7.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><br><br>&emsp;&emsp; Rs 100</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/dessert8.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><br><br>&emsp;&emsp; Rs 100</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/dessert9.png") {
		 t.innerHTML='<span style="font-size:25px; font-family:Pacifico;"><br>Strawberry, Mango, Chocolate, Vanilla<br>&emsp;&emsp; Rs 120</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app1.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><br><br>&emsp;&emsp; Rs 250</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app2.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><br><br>&emsp;&emsp; Rs 120</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app3.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><br><br>&emsp;&emsp; Rs 160</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app4.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><br><br>&emsp;&emsp; Rs 160</span>';
	}
		else if (m == "http://localhost/pizzeria/Assets/app5.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><br><br>&emsp;&emsp; Rs 120</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app6.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><br><br>&emsp;&emsp; Rs 200</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app7.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><br><br>&emsp;&emsp; Rs 180</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app8.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><br><br>&emsp;&emsp; Rs 130</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app9.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><br><br>&emsp;&emsp; Rs 250</span>';
	}
		else if (m == "http://localhost/pizzeria/Assets/ap10.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><br><br>&emsp;&emsp; Rs 300</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app11.png") {
		 t.innerHTML='<span style="font-size:16px; font-family:Pacifico;">Made with tantalizing hot sauce smoked chicken and imported jalapeno served with a garnish of green pepper<br>&emsp;&emsp;&emsp; Rs 130</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app12.png") {
		 t.innerHTML='<span style="font-size:20px; font-family:Pacifico;">A prelude to a perfect meal - our very own thick chicken soup with sweet corn chicken<br>&emsp;&emsp;&emsp; Rs 130</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app13.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><br><br>&emsp;&emsp;&emsp; Rs 400</span>';
	}
	else if (m == "http://localhost/pizzeria/Assets/app14.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><br><br>&emsp;&emsp; Rs 200</span>';
	}
		else if (m == "http://localhost/pizzeria/Assets/app15.png") {
		 t.innerHTML='<span style="font-size:30px; font-family:Pacifico;"><br><br>&emsp;&emsp; Rs 200</span>';
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




