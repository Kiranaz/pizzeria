<?php include 'header.php'; ?>
<title id="title">Pasta</title>
</head>

<body onload="getpagename(); get_products_image(); " style=" background: url(Assets/pizza-pattern2.jpg); background-size: 100% 100%; ">
    <div id="success_message"> </div>  
<div class="bg" id="b3b">
    <div class="container1" onmouseover="pricedisplay()" id="abc12345" onmouseleave="imgchange(this)" style=" display: none; top:; left:; width: 25%;">
        <li>
            <img id="abc123" src="" class="image"   style="visibility: visible; width:100%">
            <div class="overlay" onmouseleave="resume()" >
                <p id="overlaytext1" class="overlaytext"> </p>
                <button class="button button1" onclick="AddToCart();" onclick="AddToCart()" align="center">Add to Cart</button>
                <div id="custom-selectid" class="custom-select" >
                    <select id="1" onchange="pricedisplay()" style="visibility: hidden;">
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


<!-- <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:510px; margin-left:140px; font-family:'cabin sketch'; color:#ff7733; "> CREAMY PASTA  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:510px; margin-left:505px; font-family: 'cabin sketch'; color:#ff7733; "> Spicy Chicken Pasta  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:510px; margin-left:920px; font-family:'cabin sketch'; color:#ff7733; "> ALFREDO PASTA  </p>

    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:900px; margin-left:140px; font-family:'cabin sketch'; color:#ff7733; "> Beef Lasagne  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:900px; margin-left:530px; font-family:'cabin sketch'; color:#ff7733; "> Chicken Lasagne  </p>
    <p id="pizzaNamesID" class="pizza names" style=" position:absolute; font-size:30px; margin-top:900px; margin-left:980px; font-family:'cabin sketch'; color:#ff7733; "> Spaghetti  </p>
 -->