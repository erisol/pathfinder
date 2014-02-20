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
    
    <!-- Wrapper begin -->
    
    <div id="wrapper">
    
    
    
    
    	<!-- Map operating menu begin -->
        
        <div id="operateMenu">
			<?php
				echo "<h2>".$youAre."</h2><br />\n";
				
				echo $building."<br />".$floor[4]."\n";
				echo "<br /><br />\n\n";
				echo $zoomIn." / ".$zoomOut;
				echo "<br /><br />\n\n";
            	echo "<img id=\"zoomInImage\" src=\"img/zoomIn_icon.png\" width=\"50\" height=\"50\" alt=\"". $zoomIn ."\" />\n";
           		echo "<img id=\"zoomOutImage\" src=\"img/zoomOut_icon.png\" width=\"50\" height=\"50\" alt=\"". $zoomOut ."\" />\n";
				echo "<br /><br />\n\n";
				echo $floorUp." / ".$floorDown;
				echo "<br /><br />\n\n";
            	echo "<img id=\"floorUpImage\" src=\"img/floorUp_icon.png\" width=\"50\" height=\"50\" alt=\"". $floorUp ."\" />\n";
            	echo "<img  id=\"floorDownImage\" src=\"img/floorDown_icon.png\" width=\"50\" height=\"50\" alt=\"". $floorDown ."\" /><br />\n";
				echo "<h2>".$yourRoute."</h2><br />\n";
				echo $goingFrom." undefined<br />\n";
				echo $goingTo." undefined<br />\n";
			?>
		</div>
        
        <!-- Map operating menu end -->
        
        
		<!-- Container begin -->
        <div id="container">
        <script type='text/javascript'>
		var newWidth  = document.documentElement.clientWidth;
var newHeight = document.documentElement.clientHeight;
		//<![CDATA[ 
$(window).load(function(){
var stage = new Kinetic.Stage({
    container: 'container',
    width: newWidth,
    height: newHeight-80
	
});
var layer = new Kinetic.Layer();
stage.add(layer);


// parentGroup is used in jquery events
// so make it global
var parentGroup;
var zoomInButton = 0;
var zoomOutButton = 3;

// load the image and then start the app
var image = new Image();
image.onload = function () {
    start();
}
image.src = "kart/kart_KE_5etg.jpg";

// build everything, wire events
function start() {

    parentGroup = new Kinetic.Group({
        x: 0,
        y: 0,
        width: image.width,
        height: image.height,
        draggable: true,
		dragBoundFunc: function(pos) {
			  var X = pos.x;
			  var Y = pos.y;
			  
			  if (Y < -905) { Y=-905; }
			  if (X < -1000) { X=-1000; }
			  if(Y > 0) { Y=0; }
			  if(X > 0) { X=0; }
			  
			  return({y:Y,x:X});
			  
			  }
    });
    layer.add(parentGroup);

    var kImage = new Kinetic.Image({
        image: image,
        x: 0,
        y: 0,
        width: image.width,
        height: image.height
    });
    parentGroup.add(kImage);
    layer.draw();
	
	if(zoomOutButton == 3) {
		document.getElementById("zoomOut").setAttribute("disabled");
	}
	
    $("#zoomIn").click(function () {
        parentGroup.setScale(parentGroup.getScale().x + 0.15);
		zoomInButton++;
		zoomOutButton--;
			if (zoomOutButton < 0) zoomOutButton = 0;
		if (zoomOutButton < 3) {
			document.getElementById("zoomOut").removeAttribute("disabled");
		}
		if (zoomInButton == 3) {
			document.getElementById("zoomIn").setAttribute("disabled");
		}
        layer.draw();
    });

    $("#zoomOut").click(function () {
        parentGroup.setScale(parentGroup.getScale().x - 0.15);
		zoomOutButton++;
		zoomInButton--;
		if (zoomInButton < 0) zoomInButton = 0;
		if (zoomInButton < 3) {
			document.getElementById("zoomIn").removeAttribute("disabled");
		}
		if (zoomOutButton == 3) {
			document.getElementById("zoomOut").setAttribute("disabled");
		}
        layer.draw();
    });

}
});//]]>  

</script>
        </div>
		<!-- Container end -->
    
    </div>
    <!-- Wrapper end -->
    
    

</body>
</html>
