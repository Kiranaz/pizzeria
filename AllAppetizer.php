<?php include 'header.php'; ?>
<title id="title">Appetizer</title>
</head>

<body onload="getpagename(); get_products_image(); " class="big">
    <div id="success_message"> </div>
        
<div class="bg" id="b3b">
    <div class="container1" onmouseover="pricedisplay()" id="abc12345" onmouseleave="imgchange(this)" style=" display: none; top:; left:; width: 25%;">
        <li>
            <img id="abc123" src="" class="image"   style="visibility: visible; width:100%">
            <div class="overlay" onmouseleave="resume()" >
                <p id="overlaytext1" class="overlaytext"> </p>
                <button class="button button1" onclick="AddToCart();" onclick="AddToCart()" align="center">Add to Cart</button>
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
</div>

</body>


 <?php include 'footer.php'; ?> 

</html>




<!-- <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:510px; margin-left:150px; font-family:'cabin sketch'; color:#ff7733; "> Chicken Fries  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:510px; margin-left:490px; font-family: 'cabin sketch'; color:#ff7733; "> Plain Garlic Bread 4 Pcs  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:510px; margin-left:880px; font-family:'cabin sketch'; color:#ff7733; "> Garlic Bread Cheese 4 Pcs  </p>

    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:920px; margin-left:115px; font-family:'cabin sketch'; color:#ff7733; "> Cheese Stick 4 Pcs  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:920px; margin-left:530px; font-family:'cabin sketch'; color:#ff7733; "> Bread Stick 4 Pcs  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:920px; margin-left:930px; font-family:'cabin sketch'; color:#ff7733; "> Chicken Wings 6 Pcs  </p>


            <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1325px; margin-left:100px; font-family:'cabin sketch'; color:#ff7733; "> Chicken Nuggets 5 Pcs  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1325px; margin-left:540px; font-family: 'cabin sketch'; color:#ff7733; "> French Fries  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1325px; margin-left:920px; font-family:'cabin sketch'; color:#ff7733; "> Garlic Mushroom  </p>

    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1750px; margin-left:80px; font-family:'cabin sketch'; color:#ff7733; "> Jalapeno Cream Balls 6 Pcs  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1750px; margin-left:525px; font-family:'cabin sketch'; color:#ff7733; "> Hot & Sour Soup  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1750px; margin-left:920px; font-family:'cabin sketch'; color:#ff7733; "> Chicken Corn Soup  </p>

            <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:2100px; margin-left:190px; font-family:'cabin sketch'; color:#ff7733; "> Salad  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:2100px; margin-left:510px; font-family:'cabin sketch'; color:#ff7733; "> Spicy Chicken Roll  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:2100px; margin-left:910px; font-family:'cabin sketch'; color:#ff7733; "> Chicken Cream Roll  </p>
 -->





