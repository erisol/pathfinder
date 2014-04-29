// GLOBAL VARIABLES

var DEFAULT_FLOOR = 1;
var currentFloor = DEFAULT_FLOOR;

var zoomCounter = 0;

var maxWidth;
var maxHeight;
var display = new LoadNodesAndEdges();

// Force resize of client window
function resizeClient() {
  window.moveTo(0, 0);
  window.resizeTo(screen.width, screen.height);
}

// GET USER' CLIENT WIDTH AND HEIGHT

function getClientWidth() {
	maxWidth  = document.documentElement.clientWidth;
	return maxWidth;
}

function getClientHeight() {
	maxHeight = document.documentElement.clientHeight;
	return maxHeight;
}

function loadMapToCenter() {
var windowHeight = $(window).height();
var windowWidth = $(window).width();
var canvasWidth = $("#canvas").width();
var canvasHeight = $("#canvas").height();
var combinedHeight = canvasHeight-windowHeight;
var combinedWidth = canvasWidth-windowWidth;

$("#container").scrollTop(combinedHeight/2);
$("#container").scrollLeft(combinedWidth/2);

}

// Set Container Height

function setContainer() {
	getClientWidth();
	getClientHeight();
	var nWidth = maxWidth+10;
	var nHeight = maxHeight-80;
	var container = document.getElementById("container");
	var styleString = String("overflow: auto; width:"+ nWidth +"px; height: "+ nHeight +"px;");
	
	container.setAttribute("style",styleString);
}

function setWrapper() {
	var styleString = String("margin: 0 auto; overflow: hidden;");
	var wrapper = document.getElementById("wrapper");
	wrapper.setAttribute("style", styleString);
}

// POP UP BOX FOR DISABILITY USERS

function showDisabilityText() {
	$("#disabilityImageHover").fadeIn("slow");
	
}

function hideDisabilityText() {
	$("#disabilityImageHover").fadeOut("slow");}

// ENABLE / DISABLE ZOOM IN

function enableZoomIn() {
	//document.getElementById("zoomInImage").onclick=function()
	document.getElementById("zoomInImage").src="img/zoomIn_icon.png";
}

function disableZoomIn() {
	document.getElementById("zoomInImage").onclick="";
	document.getElementById("zoomInImage").src="img/deactivated_zoomIn_icon.png";
}

// ENABLE / DISABLE ZOOM OUT

function enableZoomOut() {
	//document.getElementById("zoomInImage").onclick=function()
	document.getElementById("zoomOutImage").src="img/zoomOut_icon.png";
}

function disableZoomOut() {
	document.getElementById("zoomOutImage").onclick="";
	document.getElementById("zoomOutImage").src="img/deactivated_zoomOut_icon.png";
}

// ENABLE / DISABLE FLOOR UP

function enableFloorUp() {
	document.getElementById("floorUpImage").onclick="floorUp()";
	document.getElementById("floorUpImage").src="img/floorUp_icon.png";
}

function disableFloorUp() {
	document.getElementById("floorUpImage").onclick="";
	document.getElementById("floorUpImage").src="img/deactivated_floorUp_icon.png";
}

// ENABLE / DISABLE FLOOR DOWN


function enableFloorDown() {
	document.getElementById("floorDownImage").onclick="floorDown()";
	document.getElementById("floorDownImage").src="img/floorDown_icon.png";
}

function disableFloorDown() {
	document.getElementById("floorDownImage").onclick="";
	document.getElementById("floorDownImage").src="img/deactivated_floorDown_icon.png";
}

// FLOOR UP / FLOOR DOWN FUNCTION

function floorUp() {
	if (currentFloor == 5) {
		currentFloor = 5;
	} else {
		currentFloor++;
	}
	checkFloor();
}

function floorDown() {
	if (currentFloor == 1) {
		currentFloor = 1;
	} else {
		currentFloor--;
	}
	checkFloor();
}

// ZOOM IN / ZOOM OUT FUNCTION

function zoomIn() {
	if (zoomCounter  > 4) {
		zoomCounter = 4;
	} else if (zoomCounter < 0) {
		zoomCounter = 0;
		zoomCounter++;
	} else {
		zoomCounter++;
	}
}

function zoomOut() {
		if (zoomCounter > 4) {
		zoomCounter = 4;
		zoomCounter--;
		} else if (zoomCounter < 0) {
			zoomCounter = 0;
		} else {
			zoomCounter--;
		}
	
}

function fillIn(){
	var selectAdd = new Load();
	selectAdd.addRooms();
}

function checkFloor() {
	var map = document.getElementById("canvas");
	switch(parseInt(currentFloor)) {
		case 1:
			map.setAttribute("style", "background: url(kart/kart_KE_1etg.jpg) ;");
			display.changeFloorDisplay(1);
	console.log(currentFloor);
			break;
		case 2:
			map.setAttribute("style", "background: url(kart/kart_KE_2etg.jpg) ;");
			display.changeFloorDisplay(2);
	console.log(currentFloor);
			break;
		case 3:
			map.setAttribute("style", "background: url(kart/kart_KE_3etg.jpg) ;");
			display.changeFloorDisplay(3);
	console.log(currentFloor);
			break;
		case 4:
			map.setAttribute("style", "background: url(kart/kart_KE_4etg.jpg) ;");
			display.changeFloorDisplay(4);
	console.log(currentFloor);
			break;
		case 5:
			map.setAttribute("style", "background: url(kart/kart_KE_5etg.jpg) ;");
			display.changeFloorDisplay(5);
	console.log(currentFloor);
			break;
		default:
			map.setAttribute("style", "background: url(kart/kart_KE_1etg.jpg) ;");
	console.log(currentFloor);
			changeFloorDisplay();

	}
	
}

function findPath(){
	removeDraw();
	var fromRoom = document.getElementById("fromRoom").value;
	var toRoom = document.getElementById("toRoom").value;
	currentFloor = display.convertAndPathFind(fromRoom,toRoom,currentFloor);
	checkFloor();
}
	