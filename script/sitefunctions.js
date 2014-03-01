var maxWidth;
var maxHeight;

// GET USER' CLIENT WIDTH AND HEIGHT

function getClientWidth() {
	maxWidth  = document.documentElement.clientWidth;
	return maxWidth;
}

function getClientHeight() {
	maxHeight = document.documentElement.clientHeight;
	return maxHeight;
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
	document.getElementById('disabilityImageHover').style.display = "table-cell";
}

function hideDisabilityText() {
	document.getElementById('disabilityImageHover').style.display = "none";
}

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
var DEFAULT_FLOOR = 1;
var currentFloor = DEFAULT_FLOOR;



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

function checkFloor() {
	var map = document.getElementById("canvas");
	
	switch(currentFloor) {
		case 1:
			map.setAttribute("style", "background: url(kart/kart_KE_1etg.jpg) scroll;");
			break;
		case 2:
			map.setAttribute("style", "background: url(kart/kart_KE_2etg.jpg) scroll;");
			break;
		case 3:
			map.setAttribute("style", "background: url(kart/kart_KE_3etg.jpg) scroll;");
			break;
		case 4:
			map.setAttribute("style", "background: url(kart/kart_KE_4etg.jpg) scroll;");
			break;
		case 5:
			map.setAttribute("style", "background: url(kart/kart_KE_5etg.jpg) scroll;");
			break;
		default:
			map.setAttribute("style", "background: url(kart/kart_KE_1etg.jpg) scroll;");
	}
	
}
	
	