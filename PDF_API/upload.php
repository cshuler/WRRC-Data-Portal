<?php

header("Access-Control-Allow-Origin: *");

foreach ($_FILES["myFiles"]["tmp_name"] as $key => $value) {
  $targetPath = "uploads/" . basename($_FILES["myFiles"]["name"][$key]);
  move_uploaded_file($value, $targetPath);
}

	$fileName = $_FILES["myFiles"]["name"][0];

    $command = escapeshellcmd('python3 test2.py ' . $fileName);                                                                $output = shell_exec($command);     

?>
