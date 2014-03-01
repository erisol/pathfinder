<?php
// Start sessions
session_start();

// Set default language (this case, norwegian)
if (!isset($_SESSION["language"])) {
$_SESSION["language"] = "norsk";
}

	if($_GET["setLanguage"] == "english") {
		$_SESSION["language"] = "english";
	} else if($_GET["setLanguage"] == "norsk") {
		$_SESSION["language"] = "norsk";
	}
// Include global variables
include("php/global.php");

// Array over rooms in building
//include("/php/roomlist.php");

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<!-- Stylesheets -->
<!-- Reset CSS -->
<link rel="stylesheet" type="text/css" href="style/reset.css" />

<!-- Website template CSS -->
<link rel="stylesheet" type="text/css" href="style/template.css" />
<!-- /Stylesheets -->


<!-- Import necessary libraries -->

<!-- External -->
<!-- JQuery -->
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>

<!-- KineticJS -->
<script type="text/javascript" src="http://d3lp1msu2r81bx.cloudfront.net/kjs/js/lib/kinetic-v4.5.5.min.js"></script>
<!-- /External -->

<!-- Internal -->

<script type="text/javascript" src="script/sitefunctions.js"></script>

<!-- /Internal -->

<title><?php echo $siteTitle; ?></title>

</head>

<body>

<!-- Top bar begin -->

	<div id="topBar">
    
    	<!-- Popup box for disability users -->
        
        <span id="disabilityImageHover">
        <img src="img/boxLeft.png" height="22" width="5" style="float:left;" />
		<?php echo $disabilityHover; ?>
        <img src="img/boxRight.png" height="22" width="5" style="float:right; margin-top:-22px;" />
        </span>
        
        <!-- End popup box -->
    
    	<!-- Menu top bar begin -->
    	<div id="topMenu">
        	<?php
            echo "<form name=\"navigate\" method=\"POST\">";
                echo $goingFrom;
                echo "<select class=\"topMenuForm\" name=\"from\">\n";
                echo 	"<option value\"#\">Array comes here</option>\n";
                echo "</select>\n";
                echo $goingTo;
                echo "\n<select class=\"topMenuForm\" name=\"to\">\n";
                echo 	"<option value\"#\">Array comes here</option>\n";
                echo "</select>\n";
                echo $disability;
                echo "\n<input class=\"topMenuForm\" name=\"handicapped\" type=\"checkbox\" /> &emsp; \n";
                echo "<input class=\"topMenuForm\" type=\"submit\" value=\"". $showWayButton ."\" />\n";
            	echo "</form>";
				?>
       </div>
       
       <!-- Top bar menu end -->
      
       
       <!-- Language bar in top bar -->
       
       <div id="languageBar">
            <a href="?setLanguage=norsk"><img src="img/norwegian_icon.jpg" height="15" width="27" alt="Velg norsk spr&aring;k" border="0" /></a> / 
            <a href="?setLanguage=english"><img src="img/english_icon.jpg" height="15" width="27" alt="Choose English language" border="0" /></a>
       </div>
       
       <!-- Language bar end -->
       
       
    </div>
    
    <!-- Top bar end -->
    
        	<!-- Map operating menu begin -->
        
        <div id="operateMenu">
        	<div id="leftOperate">
			<?php
				echo "<strong>".$youAre."</strong>". $building ." ";
			?>
            </div>
            <div id="rightOperate">
            <?php
				echo "<img id=\"zoomInImage\" src=\"img/zoomIn_icon.png\" width=\"30\" height=\"30\" alt=\"". $zoomIn ."\" />";
				echo "<img id=\"zoomOutImage\" src=\"img/zoomOut_icon.png\" width=\"30\" height=\"30\" alt=\"". $zoomOut ."\" />";
				echo "<img id=\"floorUpImage\" src=\"img/floorUp_icon.png\" width=\"30\" height=\"30\" alt=\"". $floorUp ."\" onclick=\"floorUp()\" />";
				echo "<img  id=\"floorDownImage\" src=\"img/floorDown_icon.png\" width=\"30\" height=\"30\" alt=\"". $floorDown ."\" onclick=\"floorDown()\" /><br />";
			?>
            </div>
		</div>
        
        <!-- Map operating menu end -->
    
    <!-- Wrapper begin -->
    
    <div id="wrapper">
    
    
        
        
		<!-- Container begin -->
        <div id="container" >
        		
                <!-- Canvas begin -->
        		<div id="canvas"></div>
                <!-- Canvas end -->
        </div>
		<!-- Container end -->
        
        <!-- Scripts running in container -->
        <script>
		$(document).ready(checkFloor());
		setWrapper();
		setContainer();
        </script>
        <!-- Scripts running in container end -->
    
    </div>
    <!-- Wrapper end -->
    
    

</body>
</html>
