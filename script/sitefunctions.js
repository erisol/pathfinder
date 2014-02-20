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
	//document.getElementById("floorUpImage").onclick=function()
	document.getElementById("floorUpImage").src="img/floorUp_icon.png";
}

function disableFloorUp() {
	document.getElementById("floorUpImage").onclick="";
	document.getElementById("floorUpImage").src="img/deactivated_floorUp_icon.png";
}

// ENABLE / DISABLE FLOOR DOWN


function enableFloorDown() {
	//document.getElementById("floorUpImage").onclick=function()
	document.getElementById("floorDownImage").src="img/floorDown_icon.png";
}

function disableFloorDown() {
	document.getElementById("floorDownImage").onclick="";
	document.getElementById("floorDownImage").src="img/deactivated_floorDown_icon.png";
}