<?php include 'header.php';?>

<title id="title" >All Pizzas</title>
</head>

<<<<<<< HEAD
<body onload="getpagename(); get_products_image();" class="big">
=======
<body onload="getpagename(); get_products_image(); getcartnumber()" style=" background: url(Assets/pizza-pattern2.jpg); background-size: 100% 100%; ">
>>>>>>> 2458642bfe0c479764f92a4832ea0dfd4468b647
    <div id="success_message"> </div>  
<div class="bg" id="b3b">
    <div class="container1" onmouseover="pricedisplay()" id="abc12345" onmouseleave="imgchange(this)" style=" display: none; top:; left:; width: 25%;">
        <li>
            <img id="abc123" src="" class="image"   style="visibility: visible; width:100%">
            <div class="overlay" onmouseleave="resume()" >
                <p id="overlaytext1" class="overlaytext"> </p>
                <button class="button button1" onclick=" cartIncrement(); AddToCart();" onclick="AddToCart()" align="center">Add to Cart</button>
                <div id="custom-selectid" class="custom-select" >
                    <select id="1" onchange="pricedisplay()" style="visibility: visible;">
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
</div>
</body>

<?php include 'footer.php'; ?>











</html>



<!-- <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:530px; margin-left:150px; font-family:'cabin sketch'; color:#ff7733; "> BBQ TIKKA  </p>
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
 -->


