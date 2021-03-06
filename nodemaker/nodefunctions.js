Array.prototype.checkId = function(value){
	for(var indx = 0; indx < this.length; indx++){
		var testArray = this[indx].split(",");
		if(testArray[0] == value){
			return indx;
		}
	}
	return -1;
}

var array1Floor = [];
var array2Floor = [];
var array3Floor = [];
var array4Floor = [];
var array5Floor = [];
var yId = 0;
var xId = 0;
var firstload = true;
var xGrid = [];
var yGrid = [];
var displayedNodes = [];
var placing = false;
var oldsaved = true;
var isChangingFloor = false;
currentFloor = 1;
var nextId = 0;


function clearGrids(){
xGrid.length = 0;
yGrid.length = 0;	
}

function checkSelectedFloor() {
	nextId = parseInt(currentIdVal());
	var theCanvas = document.getElementById("makeNodeCanvas");
	var selectedFloor = parseInt(document.getElementById("fVal").value);
	switch (selectedFloor) {
		case 1:
			clearGrids();
			clearNodes();
			theCanvas.setAttribute("style", "background: url(../kart/kart_KE_1etg.jpg)");
			loadSelectedFloorGrid(selectedFloor);
			break;
		case 2:
			clearGrids();
			clearNodes();
			theCanvas.setAttribute("style", "background: url(../kart/kart_KE_2etg.jpg)");
			loadSelectedFloorGrid(selectedFloor);
			break;
		case 3:
			clearGrids();
			clearNodes();
			theCanvas.setAttribute("style", "background: url(../kart/kart_KE_3etg.jpg)");
			loadSelectedFloorGrid(selectedFloor);
			break;
		case 4:
			clearGrids();
			clearNodes();
			theCanvas.setAttribute("style", "background: url(../kart/kart_KE_4etg.jpg)");
			loadSelectedFloorGrid(selectedFloor);
			break;
		case 5:
			clearGrids();
			clearNodes();
			theCanvas.setAttribute("style", "background: url(../kart/kart_KE_5etg.jpg)");
			loadSelectedFloorGrid(selectedFloor);
			break;	
	}
	firstload = false;
}

function getMousePos(canvas, evt) {
   	var rect = canvas.getBoundingClientRect();
       return {
       	x: evt.clientX - rect.left,
         	y: evt.clientY - rect.top
       };
   }
   var canvas = document.getElementById('makeNodeCanvas');
   var context = canvas.getContext('2d');
  
function writeMessage(message) {
	var messageCoords = document.getElementById("mouseCoords");
	messageCoords.innerHTML = message; 
}

canvas.addEventListener('mousemove', function(evt) {
	var mousePos = getMousePos(canvas, evt);
    var message = parseInt(snapToXGrid(mousePos.x)) + ',' + parseInt(snapToYGrid(mousePos.y));
   	writeMessage(message);
}, false);

function getCurrentArray(){
	switch(currentFloor){
		case 1: 
		return array1Floor;
		break;
		
		case 2: 
		return array2Floor;
		break;
		
		case 3: 
		return array3Floor;
		break;
		
		case 4: 
		return array4Floor;
		break;
		
		case 5: 
		return array5Floor;
		break;
	}
}
function clearNodes(){
	var currentArray = getCurrentArray();
	var selectedFloor = parseInt(document.getElementById("fVal").value);
	switch(selectedFloor){
		case 1: 
		readArrayInfoAndAdd(currentArray,array1Floor);
		currentFloor = 1;
		break;
		
		case 2: 
		readArrayInfoAndAdd(currentArray,array2Floor);
		currentFloor = 2;
		break;
		
		case 3: 
		readArrayInfoAndAdd(currentArray,array3Floor);
		currentFloor = 3;
		break;
		
		case 4: 
		readArrayInfoAndAdd(currentArray,array4Floor);
		currentFloor = 4;
		break;
		
		case 5: 
		readArrayInfoAndAdd(currentArray,array5Floor);
		currentFloor = 5;
	break;
	}
}

function readArrayInfoAndAdd(currentArray, fArray){
	isChangingFloor = true;
	if(!firstload){
		for(var idx = 0; idx < currentArray.length; idx++){
			var currentNode = currentArray[idx].split(",");
			removeNode(parseInt(currentNode[0])+1);
		}
	}
	
	for(var indx = 0; indx < fArray.length; indx++){
		var currentNode = fArray[indx].split(",");
		drawOldNode(currentNode[2], currentNode[3], currentNode[0]);
		addNodeToList(parseInt(currentNode[0])+1);
	}
	isChangingFloor = false;
}

function addToCurrentFloorArray(curFloor, node){
	var currentFloor = parseInt(curFloor);
	switch(currentFloor){
		case 1: 
		array1Floor[array1Floor.length] = node;
		break;
		
		case 2: 
		array2Floor[array2Floor.length] = node;
		break;
		
		case 3: 
		array3Floor[array3Floor.length] = node;
		break;
		
		case 4: 
		array4Floor[array4Floor.length] = node;
		break;
		
		case 5: 
		array5Floor[array5Floor.length] = node;
		break;
	}
}

function getrooms(){
	var loaded = loadRooms();
	var rooms = new Array();
	var info = new Array();
	var loaded = loaded.split("||");
	for(var idx = 0; idx < loaded.length; idx++){
		var rest = loaded[idx].split(",");
		info[info.length] = rooms.length;
		for(var indx = 0; indx < rest.length; indx++){
			rooms[rooms.length] = rest[indx];
		}
	}
	return [rooms, info];
}

function loadRooms() {
	var rooms;
	jQuery.ajax({
		async: false,
		url: "rooms.txt",
		dataType: 'text',
		type: "GET",
		cache: false,
  		success: function(data) {
			rooms = data;
		}
	});
	return rooms;
}

var floorListArray = ["","grids/ke/1.txt", "grids/ke/2.txt", "grids/ke/3.txt", "grids/ke/4.txt", "grids/ke/5.txt"];
function loadSelectedFloorGrid(n) {
	jQuery.ajax({
		url: floorListArray[n],
		dataType: 'text',
		type: "GET",
		cache: false,
  		success: function(data) {
    		var newArray = data.split(",");
			for (var i = 0; i<=newArray.length-2; i+=2) {
				if (newArray[i] == 0 && newArray[i+1] >= 0) {
					yGrid[yGrid.length] = newArray[i+1];
				} else if (newArray[i] >= 0 && newArray[i+1] == 0) {
					xGrid[xGrid.length] = newArray[i];
				} else {
				}
			} 
  		}
	});
}

var floorNodeListArray = ["","nodes/ke/1.txt", "nodes/ke/2.txt", "nodes/ke/3.txt", "nodes/ke/4.txt", "nodes/ke/5.txt"];
function loadNodes(){
	tempfloor = currentFloor;
	for(var n = 1; n < floorNodeListArray.length; n++){
		currentFloor = n;
		var currentarr = getCurrentArray();
		jQuery.ajax({
			async: false,
			url: floorNodeListArray[n],
			dataType: 'text',
			type: "GET",
			cache: false,
	  		success: function(data) {
	    		var newArray = data.split(",");
				for (var i = 0; i<=newArray.length-5; i+=5) {
					if(newArray[i] != undefined || newArray.length != 0){
						var string = newArray[i]+","+newArray[i+1]+","+newArray[i+2]+","+newArray[i+3]+","+newArray[i+4];
						currentarr[currentarr.length] = string;
					}
				}       
	  		}
		});
	}
	currentFloor = tempfloor;
}

function saveNodes(){
	if (array1Floor.length == 0 && array2Floor.length == 0 && array3Floor.length == 0 && array4Floor.length == 0 && array5Floor.length == 0) {
	var feedback = confirm("All the arrays is empty, are you sure you wanna save?");
		if(!feedback) return;
	}
	writeNodeToFile();	
}
  
function writeNodeToFile(){
	tempfloor = currentFloor;
	for(var i = 1;  i< floorNodeListArray.length; i++){
		currentFloor = i;
		var currentarr = getCurrentArray();
		var file = String(floorNodeListArray[i]);
		var data = currentarr;
		var xmlhttp;
		if(window.XMLHttpRequest) {
			xmlhttp=new XMLHttpRequest();
		}else {
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("POST","operations.php?data="+data+"&file="+file,true);
		xmlhttp.send();
	}
	currentFloor = tempfloor;
}

function drawNode(){
	if(!placing){
		if(oldsaved){
			placing = true;
			oldsaved = false;
			var getCanvas = document.getElementById("canvasFloat");
			var node = document.createElement("div");
			var nodeId = String("nodediv"+nextId);
			node.setAttribute("id", nodeId);
			node.style.height = "6px";
			node.style.width = "6px";
			node.style.backgroundColor = "#FF0000";
			node.style.cssFloat ="left";
			node.style.left ="300";
			node.style.top = "0";
			node.style.position = "absolute";
			node.style.display = "visible";
			getCanvas.appendChild(node);
		}
		moveNode();
	}
}

function moveNode() {
	var newNode = ("#nodediv"+nextId)
	var runningBoolean = true;
   	document.body.style.cursor = 'none';
		$("#canvasFloat").mousemove(function(e){
			if (runningBoolean) {
				var mousePos = getMousePos(canvas, e);
				$mouseX = parseInt(+snapToXGrid(mousePos.x)+ +297);
				$mouseY = parseInt(snapToYGrid(mousePos.y)-3);
				$(newNode).css({top:$mouseY});
				$(newNode).css({left:$mouseX});
			} else {
				return;
			}
		});
		$("#canvasFloat").click(function(e) {
			var xvalue = document.getElementsByName("xVal");
			var yvalue = document.getElementsByName("yVal");
			var mousePos = getMousePos(canvas, e);
			xvalue[0].value = parseInt(snapToXGrid(mousePos.x)-3);
			yvalue[0].value = parseInt(snapToYGrid(mousePos.y)-3);
			runningBoolean = false;
			placing = false;
   			document.body.style.cursor = 'default';
	});
}

function snapToYGrid(y){
	if(document.getElementById("Ysnap").checked){
		yId = 0;
		for(var indx = 0; indx < yGrid.length; indx++){
			oldval = yGrid[yId]-y;
			newval = yGrid[indx]-y;
			if(oldval < 0){
				oldval = 0 - oldval;
			}
			if(newval < 0){
				newval = 0 - newval;
			}
			if(newval < oldval){
				yId = indx;	
			}
		}
		return parseInt(yGrid[yId]);
	}
	return y;
}

function snapToXGrid(x){
	if(document.getElementById("Xsnap").checked){
		xId = 0;
		for(var indx = 0; indx < xGrid.length; indx++){
			oldval = xGrid[xId]-x;
			newval = xGrid[indx]-x;
			if(oldval < 0){
				oldval = 0 - oldval;
			}
			if(newval < 0){
				newval = 0 - newval;
			}
			if(newval < oldval){
			xId = indx;	
			}
		}
		return parseInt(xGrid[xId]);
	}
	return x;
}

function drawOldNode(x, y, oldId){
	var getCanvas = document.getElementById("canvasFloat");
	var node = document.createElement("div");
	var nodeId = String("nodediv"+oldId);
	node.setAttribute("id", nodeId);
	node.style.height = "6px";
	node.style.width = "6px";
	node.style.backgroundColor = "#FF0000";
	node.style.cssFloat ="left";
	node.style.left = (parseInt(x)+300)+"px";
	node.style.top = parseInt(y)+"px";
	node.style.position = "absolute";
	node.style.display = "visible";
	getCanvas.appendChild(node);
}
function addNode() {
	var xvalue = document.getElementsByName("xVal")[0].value;
	var yvalue = document.getElementsByName("yVal")[0].value;
	var fvalue = document.getElementById("fVal").value;
	var roomid = document.getElementById("roomnr").value;
	if((xvalue !== "" || yvalue !== "") && !oldsaved){
		var node = nextId + "," + roomid + "," + xvalue +","+ yvalue +","+ fvalue;
		addToCurrentFloorArray(fvalue, node);
		displayNodes();
		nextId++;
		oldsaved = true;
	}
	// document.getElementById("roomnr").selectedIndex = 0;
	document.getElementById("roomnr").value = "";
}


function addrooms(){
	var current = 0;
	var optgroup;
	var listofroominfo = getrooms();
	var currentrooms = document.getElementById("roomnr");
	for(var indx = 0; indx < listofroominfo[0].length; indx++){
		if(indx == listofroominfo[1][current]){
			var group = document.createElement('optgroup');
   			group.label = listofroominfo[0][indx];
			group.id = listofroominfo[0][indx];
   			currentrooms.appendChild(group);
			current++;
			optgroup = document.getElementById(listofroominfo[0][indx]);
		}else{
			var newroom = document.createElement('option');
   			newroom.value = listofroominfo[0][indx];
   			newroom.innerHTML = listofroominfo[0][indx];
   			optgroup.appendChild(newroom);
		}
	}
}
function findPrevId(){
	var idVal = -1;
	tempfloor = currentFloor;
	for(var listIdx = 1; listIdx <= 5; listIdx++){
		currentFloor = listIdx;
		var nodes = getCurrentArray();
		for(var elems = 0; elems < nodes.length; elems++){
			nodeSplit = nodes[elems].split(",");
			if(parseInt(nodeSplit[0]) > parseInt(idVal)){
				idVal = nodeSplit[0];
			}
		}
	}
	currentFloor = tempfloor;
	return idVal;
}

function currentIdVal(){
	return parseInt(findPrevId())+1;  
}
  
function removedraw(nodeid){
	removeDrawnNode = "#nodediv"+nodeid;
	$(removeDrawnNode).remove();
}

function removeNode(nodeId){
	var nodesDisplayed = document.getElementById("theNodes"+nodeId);
	nodesDisplayed.remove(nodeId);
	removedraw(nodeId-1);
	if(!isChangingFloor){
		spliceFromArray(currentFloor, nodeId);
	}
}
function spliceFromArray(currentFloor, nodeId){
	switch(currentFloor){
		case 1:
		array1Floor.splice(parseInt(array1Floor.checkId(nodeId-1)),1);
		break;
		
		case 2:
		array2Floor.splice(parseInt(array2Floor.checkId(nodeId-1)),1);
		break;
		
		case 3:
		array3Floor.splice(parseInt(array3Floor.checkId(nodeId-1)),1);
		break;
		
		case 4:
		array4Floor.splice(parseInt(array4Floor.checkId(nodeId-1)),1);
		break;
		
		case 5:
		array5Floor.splice(parseInt(array5Floor.checkId(nodeId-1)),1);
		break;
	}
}

function arraynodedisplay(nodeId){
	var selectedFloor = parseInt(document.getElementById("fVal").value);
	switch(selectedFloor){
		case 1:
		return array1Floor[parseInt(array1Floor.checkId(nodeId-1))].toString();  
		break;
		
		case 2:
		return array2Floor[parseInt(array2Floor.checkId(nodeId-1))].toString(); 
		break;
		
		case 3:
		return array3Floor[parseInt(array3Floor.checkId(nodeId-1))].toString(); 
		break;
		
		case 4:
		return array4Floor[parseInt(array4Floor.checkId(nodeId-1))].toString(); 
		break;
		
		case 5:
		return array5Floor[parseInt(array5Floor.checkId(nodeId-1))].toString(); 
		break;
	}
}
function addNodeToList(displayId){
	var parentElement = document.getElementById("theNodes");
	var itemElementID = String("theNodes"+displayId);
	var itemElement = document.getElementById(itemElementID);
	var itemDisplayText = arraynodedisplay(displayId);
  	var newList= document.createElement("li");
   	var newText = document.createTextNode(itemDisplayText);
	newList.setAttribute("id", itemElementID);
   	newList.appendChild(newText);
	newList.innerHTML += " <a href='#' onclick='removeNode("+displayId+")'>Remove this</a>";
	parentElement.appendChild(newList);
}
function displayNodes() {
	var displayId = nextId+1;
	addNodeToList(displayId);
}