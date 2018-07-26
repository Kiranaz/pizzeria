<?php include 'header.php'; ?>

	

<title>Juices And Shakes</title>
</head>

<body onload="getpagename()">
<div id="success_message"> </div>

        <div class="big" id="b8a">
            <div class="bg" id="b8b"></div>

		    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:530px; margin-left:150px; font-family:'cabin sketch'; color:#ff7733; "> Orange Juice  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:530px; margin-left:550px; font-family: 'cabin sketch'; color:#ff7733; "> Mango Juice  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:530px; margin-left:910px; font-family:'cabin sketch'; color:#ff7733; "> Fresh Juice 4 Flavours  </p>

 <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:940px; margin-left:150px; font-family:'cabin sketch'; color:#ff7733; "> Mango Shake  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:940px; margin-left:560px; font-family: 'cabin sketch'; color:#ff7733; "> Vanilla Shake  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:940px; margin-left:920px; font-family:'cabin sketch'; color:#ff7733; "> Strawberry Shake  </p>

    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1335px; margin-left:125px; font-family:'cabin sketch'; color:#ff7733; "> Chocolate Shake  </p>

		
		<div class="container1" id="abc12345" onmouseover="pricedisplay4();" onmouseleave="imgchange(this)" style="top:200px; left:100px;">
		<li>	
			
	<img id="abc123" src="x" class="image"   style="visibility: hidden; ">

	<div class="overlay" onmouseleave="resume()" >
		<p id="overlaytext1" onmouseover="" class="overlaytext"> </p>
	 <button class="button button1" onclick="AddToCart(); tick();" align="center">Add to Cart</button>
	 <div  id="custom-selectid" class="custom-select" >

      <select id="1" style="visibility: hidden;" >
        <option>small</option>
        <option>regular</option>
        <option>large</option>
            </select>  

    <select id="2"  onchange="pricedisplay4()" style="visibility: visible;" >
    	
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

<img id="abc123456" src="Assets/dessert6.png" onmouseover="change(this)"  style=" position: absolute; top: 250px; left:100px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/dessert7.png" onmouseover="change(this)"  style=" position: absolute; top: 250px; left:500px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/dessert8.png" onmouseover="change(this)"  style=" position: absolute; top: 250px; left:900px;  width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/dessert9.png" onmouseover="change(this)"  style=" position: absolute; top: 650px; left:100px;    height: 270px; width: 20%; visibility:visible;">

<img id="abc123456" src="Assets/dessert10.png" onmouseover="change(this)"  style=" position: absolute; top: 650px; left:500px;  height: 270px; width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/dessert11.png" onmouseover="change(this)"  style=" position: absolute; top: 650px; left:900px; height: 270px; width: 20%; visibility:visible;">
<img id="abc123456" src="Assets/dessert12.png" onmouseover="change(this)"  style=" position: absolute; top: 1050px; left:100px; height: 270px; width: 20%; visibility:visible;">

</div>
</div>
</body>


<?php include 'footer.php'; ?>




</html>