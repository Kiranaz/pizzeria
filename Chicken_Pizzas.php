
	

<?php include 'header.php'; ?>
<title id="title">Chicken Pizza</title>
</head>

<body onload="getpagename()">
<div id="success_message"> </div>
        <div class="big" id="b2a">
            <div class="bg" id="b2b"></div>
         <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:530px; margin-left:150px; font-family:'cabin sketch'; color:#ff7733; "> BBQ TIKKA  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:930px; margin-left:100px; font-family:'cabin sketch'; color:#ff7733; "> CHICKEN TANDOORI  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1330px; margin-left:120px; font-family:'cabin sketch'; color:#ff7733; "> SICILIAN CHICKEN  </p>

    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:530px; margin-left:530px; font-family:'cabin sketch'; color:#ff7733; "> CRUST SPECIAL  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:930px; margin-left:530px; font-family:'cabin sketch'; color:#ff7733; "> CHICKEN TIKKA  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1330px; margin-left:535px; font-family:'cabin sketch'; color:#ff7733; "> EUROPEAN FEAST  </p>

    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:530px; margin-left:930px; font-family:'cabin sketch'; color:#ff7733; "> CHICKEN SUPER  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:930px; margin-left:930px; font-family:'cabin sketch'; color:#ff7733; "> CHICKEN FAJITA  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1330px; margin-left:920px; font-family:'cabin sketch'; color:#ff7733; "> CHICKEN DELUXE </p>

		
		<div class="container1" id="abc12345" onmouseover="pricedisplay()" onmouseleave="imgchange(this)" style="top:200px; left:100px;">
		<li>	
			
	<img id="abc123" src="x" class="image"   style="visibility: hidden; ">

	<div  class="overlay" onmouseleave="resume()" >
		<p id="overlaytext1" class="overlaytext"> </p>
	 <button class="button button1" onclick="AddToCart(); tick();"  align="center">Add to Cart</button>
	 <div id="custom-selectid" class="custom-select" >

    <select id="1" onchange="pricedisplay()" style="visibility: visible;" >
    	
        <option>small</option>
        <option>regular</option>
        <option>large</option>
    </select>

    <select onchange="pricedisplay()" id="2" >
    	
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
</div> 
	</div>
	
</li>

</div>

<img id="abc123456" src="Assets/menu1.png" onmouseover="change(this)"  style=" position: absolute; top: 250px; left:100px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu4.png" onmouseover="change(this)"  style=" position: absolute; top: 250px; left:500px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu8.png" onmouseover="change(this)"  style=" position: absolute; top: 250px; left:900px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu12.png" onmouseover="change(this)"  style=" position: absolute; top: 650px; left:100px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu13.png" onmouseover="change(this)"  style=" position: absolute; top: 650px; left:500px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu14.png" onmouseover="change(this)"  style=" position: absolute; top: 650px; left:900px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu15.png" onmouseover="change(this)"  style=" position: absolute; top: 1050px; left:100px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu18.png" onmouseover="change(this)"  style=" position: absolute; top: 1050px; left:500px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/menu19.png" onmouseover="change(this)"  style=" position: absolute; top: 1050px; left:900px;  width: 20%; visibility:visible;">
</div>
</div>

</body>

<?php include 'footer.php'; ?>









</html>