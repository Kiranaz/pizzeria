<?php 

    if (isset($_FILES['file']['name'])) {
        
        
        // Calling function to add post
        $name = $_FILES['file']['name']; // name of pic
        $tmp_name = $_FILES['file']['tmp_name'];
        $type = $_FILES['file']['type'];
        $size = ($_FILES['file']['size']) * 0.000001;
        $extension = strtolower(pathinfo($name, PATHINFO_EXTENSION)); // Getting extension of file

        // Unique ID for image for storing
        // $uniqueID = uniqid();

        if (isset($name)) {
            if (!empty($name)) {
                // Checking the format of the image uploaded
                if ($extension == "png") {
                    // Location where to save the image
                    $location = 'Assets/';
                    if (move_uploaded_file($tmp_name, $location . $name)) {
                        echo "picture uploaded";
                        
                    }
                }
                    
    
                }

            }
        }
    


?>