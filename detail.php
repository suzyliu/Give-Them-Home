<!DOCTYPE html>
<html lang="en">
<head>
<title>DETAIL PAGEEE</title>
<meta charset="utf-8">
<link rel="stylesheet" href="ajax.css">
</head>
    <body>
            <?php
            $a = array();
            $dir = 'images';
            if ($handle = opendir($dir)) {
              while (false !== ($file = readdir($handle))) {
                if (preg_match("/\.png$/", $file)) $a[] = $file;
                elseif (preg_match("/\.jpg$/", $file)) $a[] = $file;
                elseif (preg_match("/\.jpeg$/", $file)) $a[] = $file;
              }
              closedir($handle);
            }
            foreach ($a as $i) {
              echo "<img src='" . $dir . '/' . $i . "' />";
            }
            ?>
    

    </body>
</html>