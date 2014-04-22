<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="no-cache">
<meta http-equiv="Expires" content="-1">
<meta http-equiv="Cache-Control" content="no-cache">
<title>gridOperations</title>
</head>
<body>
<?php

$name = $_GET['file'];
$data = $_GET['data'];

$allowed_directories = array("/grids/","/nodes/", "/edges/");
$match = false;
foreach($allowed_directories as $allowed_directory) {
  if (strpos($allowed_directory,$name) === false) {
    $match = true;
    break;
  }
}

if($match) {

	unlink($name);
	$handle = fopen($name, 'w+') or die ('CANT OPEN FILE');
	fwrite($handle,$data);
	fclose($handle);
	chmod($name, 0777);

} else {
	die("Illegal file operation."); 
}
 
?>
</body>
</html>