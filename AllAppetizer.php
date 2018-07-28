<?php include 'header.php'; ?>
<title id="title">Appetizer</title>
</head>

<body onload="getpagename()">
<div id="success_message"> </div>

        <div class="big" id="b10a">
            <div class="bg" id="b10b"></div>

            <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:510px; margin-left:150px; font-family:'cabin sketch'; color:#ff7733; "> Chicken Fries  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:510px; margin-left:490px; font-family: 'cabin sketch'; color:#ff7733; "> Plain Garlic Bread 4 Pcs  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:510px; margin-left:880px; font-family:'cabin sketch'; color:#ff7733; "> Garlic Bread Cheese 4 Pcs  </p>

    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:900px; margin-left:115px; font-family:'cabin sketch'; color:#ff7733; "> Cheese Stick 4 Pcs  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:900px; margin-left:530px; font-family:'cabin sketch'; color:#ff7733; "> Bread Stick 4 Pcs  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:900px; margin-left:930px; font-family:'cabin sketch'; color:#ff7733; "> Chicken Wings 6 Pcs  </p>


            <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1310px; margin-left:100px; font-family:'cabin sketch'; color:#ff7733; "> Chicken Nuggets 5 Pcs  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1310px; margin-left:540px; font-family: 'cabin sketch'; color:#ff7733; "> French Fries  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1310px; margin-left:920px; font-family:'cabin sketch'; color:#ff7733; "> Garlic Mushroom  </p>

    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1750px; margin-left:80px; font-family:'cabin sketch'; color:#ff7733; "> Jalapeno Cream Balls 6 Pcs  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1750px; margin-left:525px; font-family:'cabin sketch'; color:#ff7733; "> Hot & Sour Soup  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1750px; margin-left:920px; font-family:'cabin sketch'; color:#ff7733; "> Chicken Corn Soup  </p>

		    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:2100px; margin-left:190px; font-family:'cabin sketch'; color:#ff7733; "> Salad  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:2100px; margin-left:510px; font-family:'cabin sketch'; color:#ff7733; "> Spicy Chicken Roll  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:2100px; margin-left:910px; font-family:'cabin sketch'; color:#ff7733; "> Chicken Cream Roll  </p>


		<div class="container1"  onmouseover="pricedisplay()" id="abc12345" onmouseleave="imgchange(this)" style="top:200px; left:100px;">
		<li>	
			
	<img id="abc123" src="x" class="image"   style="visibility: hidden; ">

	<div class="overlay" onmouseleave="resume()" >
		<p id="overlaytext1" class="overlaytext"> </p>
	 <button class="button button1" onclick="AddToCart(); tick();"  align="center">Add to Cart</button>
	 <div id="custom-selectid" class="custom-select" >

    <select id="1" style="visibility: hidden;" >
    	
        <option>small</option>
        <option>regular</option>
        <option>large</option>
        <option>jumbo</option>
    </select>

    <select id="2" onchange="pricedisplay()">
    	
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

<img id="abc123456" src="Assets/app1.png" onmouseover="change(this)"  style=" position: absolute; top: 250px; left:100px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/app2.png" onmouseover ="change(this)"  style=" position: absolute; top: 250px; left:500px; width: 20%; visibility: visible;">
<img id="abc123456" src="Assets/app3.png" onmouseover="change(this)"  style=" position: absolute; top: 250px; left:900px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/app4.png" onmouseover="change(this)"  style=" position: absolute; top: 650px; left:100px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/app5.png" onmouseover="change(this)"  style=" position: absolute; top: 650px; left:500px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/app6.png" onmouseover="change(this)"  style=" position: absolute; top: 650px; left:900px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/app7.png" onmouseover="change(this)"  style=" position: absolute; top: 1050px; left:100px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/app8.png" onmouseover="change(this)"  style=" position: absolute; top: 1050px; left:500px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/app9.png" onmouseover="change(this)"  style=" position: absolute; top: 1050px; left:900px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/app10.png" onmouseover="change(this)"  style=" position: absolute; top: 1450px; left:100px; height: 310px; width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/app11.png" onmouseover="change(this)"  style=" position: absolute; top: 1450px; left:500px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/app12.png" onmouseover="change(this)"  style=" position: absolute; top: 1450px; left:900px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/app13.png" onmouseover="change(this)"  style=" position: absolute; top: 1850px; left:100px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/app14.png" onmouseover="change(this)"  style=" position: absolute; top: 1850px; left:500px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/app15.png" onmouseover="change(this)"  style=" position: absolute; top: 1850px; left:900px;  width: 20%; visibility:visible;">

</div>
</div>
</body>
<?php include 'footer.php'; ?>










</html>