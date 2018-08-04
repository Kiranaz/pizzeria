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
	//alert(price);
	
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

    	console.log(this.responseText);
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
