<?php include 'header.php'; ?>

<title id="title">Special Pizza</title>
</head>

<body onload="getpagename();  getcartnumber()" style=" background: url(Assets/pizza-pattern2.jpg); background-size: 100% 100%; ">
    <div id="success_message"> </div>  
<div class="bg" id="b3b">
    <div class="container1" onmouseover="pricedisplay()" id="abc12345" onmouseleave="imgchange(this)" style=" display: none; top:; left:; width: 25%;">
        <li>
            <img id="abc123" src="" class="image"   style="visibility: visible; width:100%">
            <div class="overlay" onmouseleave="resume()" >
                <p id="overlaytext1" class="overlaytext"> </p>
                <button class="button button1" onclick="cartIncrement(); AddToCart();" onclick="AddToCart()" align="center">Add to Cart</button>
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

<!-- <?php include 'footer.php'; ?> -->
 









</html>




<!-- <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:530px; margin-left:110px; font-family:'cabin sketch'; color:#ff7733; "> SIGNATURE CRUST  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:930px; margin-left:160px; font-family:'cabin sketch'; color:#ff7733; "> MALAI BOTI  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1330px; margin-left:110px; font-family:'cabin sketch'; color:#ff7733; "> AFGHANI CHICKEN  </p>

    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:530px; margin-left:600px; font-family:'cabin sketch'; color:#ff7733; "> MIX 2  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:930px; margin-left:530px; font-family:'cabin sketch'; color:#ff7733; "> CREAMY CRUST  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:1330px; margin-left:560px; font-family:'cabin sketch'; color:#ff7733; "> VEG LOVER  </p>

    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:530px; margin-left:910px; font-family:'cabin sketch'; color:#ff7733; "> SHAWARMA CRUST  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:930px; margin-left:940px; font-family:'cabin sketch'; color:#ff7733; "> MIX SUPREME  </p> -->