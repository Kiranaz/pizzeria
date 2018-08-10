<input type="file" name="post-pic">
<button onclick="fac()">SUBMIT</button>
<script>
    function fac(){
        var postPicData = document.querySelector("input[name='post-pic']");
      
        var postPic = postPicData.files[0];
         var formData = new FormData();
        formData.append("file", postPic);
        

        var xhttp = new XMLHttpRequest();
         xhttp.open("POST", "uploadfile.php", true);
         xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
         }
        };
        
        xhttp.send(formData);

    }



        
</script>

