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

<!-- Panzoom -->
<script type="text/javascript" src="script/panzoom/jquery.panzoom.js"></script>

<!-- /External -->

<!-- Internal -->

<script type="text/javascript" src="pathfinding/Cords.js"></script>
<script type="text/javascript" src="pathfinding/Edge.js"></script>
<script type="text/javascript" src="pathfinding/Cost.js"></script>
<script type="text/javascript" src="pathfinding/Node.js"></script>
<script type="text/javascript" src="pathfinding/Dijkstra.js"></script>
<script type="text/javascript" src="pathfinding/drawPath.js"></script>
<script type="text/javascript" src="pathfinding/Load.js"></script>
<script type="text/javascript" src="script/displayNodes.js"></script>
<script type="text/javascript" src="script/sitefunctions.js"></script>
<!-- /Internal -->

<title><?php echo $siteTitle; ?></title>

</head>

<body onload=fillIn()>

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
                echo $goingFrom;
                echo "<select class=\"topMenuForm\" id=\"fromRoom\" name=\"from\">\n";
                echo "</select>\n";
                echo $goingTo;
                echo "\n<select class=\"topMenuForm\" id=\"toRoom\" name=\"to\">\n";
                echo "</select>\n";
                echo $disability;
                echo "\n<input class=\"topMenuForm\" name=\"handicapped\" type=\"checkbox\" /> &emsp; \n";
                echo "<button class=\"topMenuForm\" onclick=\"findPath()\" value=\"". $showWayButton ."\" />\n";
				?>
       </div>
       
               	<!-- Map operating menu begin -->
        
        <div id="operateMenu">
        	<div id="leftOperate">
			<?php
				echo "<strong>".$youAre."</strong>". $building ." ";
			?>
            </div>
            <div id="rightOperate">
            <?php
				echo "". $zoom ."";
				echo "<img src=\"img/spacer.png\" width=\"105\" height=\"1\">";
				echo "". $floors ."";
				echo "<br />\n";
				echo "<img id=\"zoomInImage\" class=\"zoom-in\" src=\"img/zoomIn_icon.png\" width=\"30\" height=\"30\" alt=\"". $zoomIn ."\" />";
				echo "<img src=\"img/spacer.png\" width=\"30\" height=\"1\">";
				echo "<img id=\"zoomOutImage\" class=\"zoom-out\" src=\"img/zoomOut_icon.png\" width=\"30\" height=\"30\" alt=\"". $zoomOut ."\"  />";
				echo "<img src=\"img/spacer.png\" width=\"50\" height=\"1\">";
				echo "<img id=\"floorUpImage\" src=\"img/floorUp_icon.png\" width=\"30\" height=\"30\" alt=\"". $floorUp ."\" onclick=\"floorUp()\" />";
				echo "<img src=\"img/spacer.png\" width=\"30\" height=\"1\">";
				echo "<img  id=\"floorDownImage\" src=\"img/floorDown_icon.png\" width=\"30\" height=\"30\" alt=\"". $floorDown ."\" onclick=\"floorDown()\" /><br />";
			?>
            </div>
		</div>
        
        <!-- Map operating menu end -->
       
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
    
    <div id="wrapper" class="scrollable">
    
 
        
		<!-- Container begin -->
        <div id="container" class="parent" >
        		
                <!-- Canvas begin -->
        		<div id="canvas" class="panzoom">
                </div>
                <!-- Canvas end -->
        </div>
		<!-- Container end -->
        
        <!-- Scripts running in container -->
              <script>
			    	// Zoom in and out
				(function() {
				  var $section = $('#container');
				  var $menu = $('#rightOperate');
				  $section.find('.panzoom').panzoom({
					$zoomIn: $menu.find(".zoom-in"),
					$zoomOut: $menu.find(".zoom-out"),
					startTransform: 'scale(1)',
					increment: 0.5,
					minScale: 1,
					contain: 'invert'
				  }).panzoom('zoom');
				})();
				
				(function() {
				  var $section = $('#container');
				  var $panzoom = $section.find('.panzoom').panzoom();
				  $panzoom.parent().on('mousewheel.container', function( e ) {
					e.preventDefault();
					var delta = e.delta || e.originalEvent.wheelDelta;
					var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
					$panzoom.panzoom('zoom', zoomOut, {
					  increment: 0.5,
					  animate: false,
					  focal: e
					});
				  });
				})();

			 
				$(document).ready(checkFloor());
				setWrapper();
				setContainer();
				resizeClient();				
		//$(document).ready(loadMapToCenter());
		//$(document).ready(checkFloorCounter());
        </script>
        <!-- Scripts running in container end -->
    
    </div>
    <!-- Wrapper end -->
    
    

</body>
</html>
