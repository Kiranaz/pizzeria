<?php include 'header.php';?>

<title id="title" >All Pizzas</title>
</head>

<body onload="getpagename()">
    <div id="success_message"> </div>
        <div class="big" id="b1a">
            <div class="bg" id="b1b"></div>

    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:530px; margin-left:150px; font-family:'cabin sketch'; color:#ff7733; "> BBQ TIKKA  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:930px; margin-left:130px; font-family:'cabin sketch'; color:#ff7733; "> CRUST SPECIAL  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1330px; margin-left:130px; font-family:'cabin sketch'; color:#ff7733; "> CREAMY CRUST  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1730px; margin-left:130px; font-family:'cabin sketch'; color:#ff7733; "> MIX SUPREME  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:2130px; margin-left:120px; font-family:'cabin sketch'; color:#ff7733; "> CHICKEN TIKKA  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:2530px; margin-left:145px; font-family:'cabin sketch'; color:#ff7733; "> HOT & SPICY  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:2930px; margin-left:120px; font-family:'cabin sketch'; color:#ff7733; "> CHEESE DELUXE  </p>

    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:530px; margin-left:510px; font-family:'cabin sketch'; color:#ff7733; "> SIGNATURE CRUST  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:930px; margin-left:510px; font-family:'cabin sketch'; color:#ff7733; "> SHAWARMA CRUST  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1330px; margin-left:520px; font-family:'cabin sketch'; color:#ff7733; "> CHICKEN SUPER  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1730px; margin-left:510px; font-family:'cabin sketch'; color:#ff7733; "> AFGHANI CHIKCEN  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:2130px; margin-left:530px; font-family:'cabin sketch'; color:#ff7733; "> CHICKEN FAJITA  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:2530px; margin-left:515px; font-family:'cabin sketch'; color:#ff7733; "> PEPERONNI FEAST  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:2930px; margin-left:560px; font-family:'cabin sketch'; color:#ff7733; "> VEG LOVER  </p>

    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:530px; margin-left:1000px; font-family:'cabin sketch'; color:#ff7733; "> MIX 2  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:930px; margin-left:950px; font-family:'cabin sketch'; color:#ff7733; "> MALAI BOTI  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1330px; margin-left:960px; font-family:'cabin sketch'; color:#ff7733; "> BEEF SUPER </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1730px; margin-left:900px; font-family:'cabin sketch'; color:#ff7733; "> CHICKEN TANDOORI </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:2130px; margin-left:920px; font-family:'cabin sketch'; color:#ff7733; "> SICILIAN CHICKEN  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:2530px; margin-left:910px; font-family:'cabin sketch'; color:#ff7733; "> EUROPEAN FEAST  </p>

		
		<div class="container1" id="abc12345"  onmouseover="pricedisplay()"  onmouseleave="imgchange(this)" style="top:200px; left:100px;">
		<li>	
			
	<img id="abc123" value="y" src="x" class="image"   style="visibility: hidden; ">

	<div class="overlay" onmouseleave="resume()" >
		<p id="overlaytext1" class="overlaytext" > </p>


	 <button class="button button1" onclick="AddToCart(); tick();" align="center">Add to Cart</button>
	 <div  id="custom-selectid" class="custom-select">

    <select onchange="pricedisplay()" id="1" style="visibility: visible;"; >
    	
        <option value="small" selected>small</option>
        <option value="regular">regular</option>
        <option value="large">large</option>
    </select>

    <select id="2"  onchange="pricedisplay()" >
    	
        <option value="1" selected>1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</div> 
	</div>
	
</li>

</div>

<img id="abc123456" value="1" src="Assets/menu1.png" onmouseover="change(this)"  style=" position: absolute; top: 250px; left:100px;  width: 20%; visibility:visible;">
<img id="abc123456" value="2" src="Assets/menu2.png" onmouseover ="change(this)"  style=" position: absolute; top: 250px; left:500px; width: 20%; visibility: visible;">
<img id="abc123456" value="3" src="Assets/menu3.png" onmouseover="change(this)"  style=" position: absolute; top: 250px; left:900px;  width: 20%; visibility:visible;">
<img id="abc123456" value="4" src="Assets/menu4.png" onmouseover="change(this)"  style=" position: absolute; top: 650px; left:100px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu5.png" onmouseover="change(this)"  style=" position: absolute; top: 650px; left:500px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu6.png" onmouseover="change(this)"  style=" position: absolute; top: 650px; left:900px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu7.png" onmouseover="change(this)"  style=" position: absolute; top: 1050px; left:100px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu8.png" onmouseover="change(this)"  style=" position: absolute; top: 1050px; left:500px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu9.png" onmouseover="change(this)"  style=" position: absolute; top: 1050px; left:900px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu10.png" onmouseover="change(this)"  style=" position: absolute; top: 1450px; left:100px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu11.png" onmouseover="change(this)"  style=" position: absolute; top: 1450px; left:500px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu12.png" onmouseover="change(this)"  style=" position: absolute; top: 1450px; left:900px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu13.png" onmouseover="change(this)"  style=" position: absolute; top: 1850px; left:100px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu14.png" onmouseover="change(this)"  style=" position: absolute; top: 1850px; left:500px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu15.png" onmouseover="change(this)"  style=" position: absolute; top: 1850px; left:900px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu16.png" onmouseover="change(this)"  style=" position: absolute; top: 2250px; left:100px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu17.png" onmouseover="change(this)"  style=" position: absolute; top: 2250px; left:500px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu18.png" onmouseover="change(this)"  style=" position: absolute; top: 2250px; left:900px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu19.png" onmouseover="change(this)"  style=" position: absolute; top: 2650px; left:100px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu20.png" onmouseover="change(this)"  style=" position: absolute; top: 2650px; left:500px;  width: 20%; visibility:visible;">
 
</div>

</div>

</body>

<?php include 'footer.php'; ?>





<style type="text/css">
	.name{
		color:white;
	}
</style>





</html>