Array.prototype.checkId = function(value){
	for(var indx = 0; indx < this.length; indx++){
		var testArray = this[indx].split(",");
		if(testArray[0] == value){
			return indx;
		}
	}
	return -1;
}
var changeFloor = false;
var oldFloor = 1;
nextId = 0;
oldSaved = true;
var edges1 = new Array();
var edges2 = new Array();
var edges3 = new Array();
var edges4 = new Array();
var edges5 = new Array();
var change1 = false;
var change2 = false;
array1Floor = [];
array2Floor = [];
array3Floor = [];
array4Floor = [];
array5Floor = [];
function trimEdges(){
	trim = new TrimEdges();
	trim.loadNodes();
	trim.loadEdges();
	trim.saveNewEdges();
}
function drawOldNode(x, y, oldId){
	var getCanvas = document.getElementById("canvasFloat");
	var node = document.createElement("div");
	var nodeId = oldId;
	node.setAttribute("id", nodeId);
	node.style.height = "6px";
	node.style.width = "6px";
	node.style.backgroundColor = "#FF0000";
	node.style.cssFloat ="left";
	node.style.left = (parseInt(x)+300)+"px";
	node.style.top = parseInt(y)+"px";
	node.style.position = "absolute";
	node.style.display = "visible";
	node.onmouseover = function(){
	showtext(nodeId);
		document.getElementById(nodeId).style.backgroundColor = "yellow";
	}
	node.onmouseout = function(){
		document.getElementById(nodeId).style.backgroundColor = "red";	
	}
	node.onclick = function(){
		changeText(nodeId);
	}
	getCanvas.appendChild(node);
}

function showtext(nodeId){
	var messageRoom = document.getElementById("curNodeRoom");
	var messageX = document.getElementById("curNodeX");
	var messageY = document.getElementById("curNodeY");
	var messageFloor = document.getElementById("curNodeFloor");
	var nodeArray = getCurrentArray()[0];
	var node = nodeArray[nodeArray.checkId(nodeId)].split(",");
	messageX.innerHTML = node[2];
	messageY.innerHTML = node[3];
	messageFloor.innerHTML = node[4];
	messageRoom.innerHTML = node[1];
}

function changeText(nodeId){
	var nodeArray = getCurrentArray()[0][getCurrentArray()[0].checkId(nodeId)].split(",");
	if(change1 && document.getElementsByName("node2Id")[0].value !== nodeArray[0]){
		document.getElementsByName("node1Id")[0].value = nodeArray[0];
		document.getElementsByName("node1Room")[0].value = nodeArray[1];
		document.getElementsByName("node1X")[0].value = nodeArray[2];
		document.getElementsByName("node1Y")[0].value = nodeArray[3];
		document.getElementsByName("node1Floor")[0].value = nodeArray[4];
		change1 = false;
		oldSaved = false;
	}else if(change2 && document.getElementsByName("node1Id")[0].value !== nodeArray[0]){
		document.getElementsByName("node2Id")[0].value = nodeArray[0];
		document.getElementsByName("node2Room")[0].value = nodeArray[1];
		document.getElementsByName("node2X")[0].value = nodeArray[2];
		document.getElementsByName("node2Y")[0].value = nodeArray[3];
		document.getElementsByName("node2Floor")[0].value = nodeArray[4];
		change2 = false;
		oldSaved = false;
	}else{
	}
}
function makeNewEdge(){
	activate1();
	activate2();
}

function activate1(){
	change1 = true;
}

function activate2(){
	change2 = true;

}

function checkEdgeFloor(type, node1floor, node2floor){
	if(node1floor !== node2floor && type === "gang"){
		alert("Du må endre edge type til Trapp eller Heis");
		return false;	
	}
	if(node1floor === node2floor && type !== "gang"){
		alert("Du må endre edge type til Gang");
		return false;	
	}
	return true;
}
function drawLine(x1, y1, x2, y2, id){
	x1 = parseInt(x1)+ +parseInt(3);
	x2 = parseInt(x2)+ +parseInt(3);
	y1 = parseInt(y1)+ +parseInt(3);
	y2 = parseInt(y2)+ +parseInt(3);
	var drawinfo = finddegrees(x1,y1,x2,y2);
	var degree = Math.round(drawinfo[0]);
	var getCanvas = document.getElementById("canvasFloat");
	var node = document.createElement("div");
	var nodeId = id;
	width = parseInt(Math.round(Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))));
	node.setAttribute("id", "line"+id);
	node.style.backgroundColor = "black";
	node.style.height = "1px";
	node.style.width = width+"px";
	node.style.top = Math.round(y1)+"px";
	node.style.position = "absolute";
	node.style.display = "visible";
	node.style.left = parseInt(x1)+parseInt(300)+"px";
	var x = -Math.round(width/2 - Math.sqrt(Math.pow((width/2),2) - Math.pow(((y2-y1)/2),2))+drawinfo[1]);
	var y = Math.round(drawinfo[2]*Math.sin((Math.PI/180)*degree));
	node.style.webkitTransform = "translateY("+y+"px) translateX("+x+"px) rotate("+degree+"deg)";
	node.style.msTransform = "rotate("+degree+"deg)"; /* IE 9 */
	node.style.transform = "rotate("+degree+"deg)"; /* Standard syntax */
	getCanvas.appendChild(node);
}

function finddegrees(x1,y1,x2,y2){
	x1 = parseInt(x1);
	x2 = parseInt(x2);
	y1= -parseInt(y1);
	y2= -parseInt(y2);
	if(x1 < x2 && y1 < y2){
		return [-(Math.atan(((y2-y1)/(x2-x1))))*(180/Math.PI),0,0.5*Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))];
	}
	
	else if(x1 < x2 && y1 > y2){
		return [(Math.atan(((y1-y2)/(x2-x1))))*(180/Math.PI),0,0.5*Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y1-y2,2))];
	}
	
	else if(x1 > x2 && y1 < y2){
		return [-180+(Math.atan(((y2-y1)/(x1-x2))))*(180/Math.PI),(x1-x2),0.5*Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y2-y1,2))];
	}
	
	else if(x1 > x2 && y1 > y2){
		return [180-(Math.atan(((y1-y2)/(x1-x2))))*(180/Math.PI),(x1-x2),0.5*Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y2-y1,2))];
	}
	
	else if(x1===x2){
		if(y1 < y2){
			return [-90,0, (y2-y1)/2];	
		}
		
		else if(y1 > y2){
			return [90,0,(y1-y2)/2];
		}
		
	}
	
	else if(y1===y2){
		if(x1 < x2){
			return [0,0,0];
		}
		
		else if(x1 > x2){
			return [0,(x1-x2),0];
		}
	}
}

function findCost(x1,y1,x2,y2){
	return parseInt(Math.round(Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))));
}


function addEdge(){
	var id1 = document.getElementsByName("node1Id")[0].value;
	var x1 = document.getElementsByName("node1X")[0].value;
	var y1 = document.getElementsByName("node1Y")[0].value;
	var floorVal1 = document.getElementsByName("node1Floor")[0].value;
	var id2 = document.getElementsByName("node2Id")[0].value;
	var x2 = document.getElementsByName("node2X")[0].value;
	var y2 = document.getElementsByName("node2Y")[0].value;
	var floorVal2 = document.getElementsByName("node2Floor")[0].value;
	var edgeType = document.getElementById("edgeType").value;
	if((id1 !== "") && (id2 !== "") && !oldSaved && checkEdgeFloor(edgeType, floorVal1, floorVal2)){
		var cost = findCost(x1,y1,x2,y2);
		var edge = (nextId+1)+","+id1 +","+x1+","+y1+ "," + id2 + "," +x2+","+y2 + ","+edgeType+","+cost;
		if(edgeType == "gang"){
			getCurrentArray()[1][getCurrentArray()[1].length] = edge;
			displayEdges();
			drawLine(x1,y1,x2,y2,nextId+1);
		}
		else if(edgeType !== "gang"){
			getOldArray()[1][getOldArray()[1].length] = edge;
			getCurrentArray()[1][getCurrentArray()[1].length] = edge;
			displayEdges();
			drawLine(x1,y1,x2,y2,nextId+1);
		}
		nextId++;
		oldSaved = true;
	}
}

function displayEdges() {
	var displayId = nextId+1;
	addEdgeToList(displayId);
}

function addEdgeToList(displayId){
	var parentElement = document.getElementById("theEdges");
	var itemElementID = String("theEdges"+displayId);
	var itemElement = document.getElementById(itemElementID);
	var itemDisplayText = getCurrentArray()[1][getCurrentArray()[1].checkId(displayId)].toString();
  	var newList= document.createElement("li");
   	var newText = document.createTextNode(itemDisplayText);
	newList.setAttribute("id", itemElementID);
   	newList.appendChild(newText);
	newList.innerHTML += " <a href='#' onclick='removeEdge("+displayId+")'>Remove this</a>";
  	parentElement.appendChild(newList);
}

function removeEdge(id){
	var nodesDisplayed = document.getElementById("theEdges"+id);
	if(nodesDisplayed !== null){
		nodesDisplayed.remove(id);
	}
	removeEdgeDraw(id);
	if(!changeFloor){
		getCurrentArray()[1].splice(id-1, 1);
	}
}
	
function removeDraw(nodeid){
	removeDrawnNode = "#"+nodeid;
	$(removeDrawnNode).remove();
}

function removeEdgeDraw(divId){
	removedEdge = "#line"+divId;
	$(removedEdge).remove();
}

function changeEdgesAndNodes(){
	changeFloor = true;
	var oldArrays = getOldArray();
	var newArrays = getCurrentArray();
	var oldNodeArray = oldArrays[0];
	var oldEdgeArray = oldArrays[1];
	var newNodeArray = newArrays[0];
	var newEdgeArray = newArrays[1];
	for(var idx = 0; idx < oldNodeArray.length; idx++){
		var currentNode = oldNodeArray[idx].split(",");
		removeDraw(parseInt(currentNode[0]));	
	}
	for(var idx = 0; idx < oldEdgeArray.length; idx++){
		var currentEdge = oldEdgeArray[idx].split(",");
		removeEdge(parseInt(currentEdge[0]));
	}
	for(var idx = 0; idx < newNodeArray.length; idx++){
		node = newNodeArray[idx].split(",");
		drawOldNode(node[2],node[3],node[0]);
	}
	for(var idx = 0; idx < newEdgeArray.length; idx++){
		edge = newEdgeArray[idx].split(",");
		addEdgeToList(edge[0]);
		drawLine(edge[2],edge[3],edge[5],edge[6],edge[0]);
	}
	changeFloor = false;
}

function getOldArray(){
	switch (oldFloor) {
		case 1:
			return [array1Floor,edges1];
			break;
		case 2:
			return [array2Floor,edges2];
			break;
		case 3:
			return [array3Floor,edges3];
			break;
		case 4:
			return [array4Floor,edges4];
			break;
		case 5:
			return [array5Floor,edges5];
			break;	
	}
}

function getCurrentArray(){
	var selectedFloor = parseInt(document.getElementById("fVal").value);
	switch (selectedFloor) {
		case 1:
			return [array1Floor,edges1];
			break;
		case 2:
			return [array2Floor,edges2];
			break;
		case 3:
			return [array3Floor,edges3];
			break;
		case 4:
			return [array4Floor,edges4];
			break;
		case 5:
			return [array5Floor,edges5];
			break;	
	}
}

function checkSelectedFloor() {
	var theCanvas = document.getElementById("makeEdgeCanvas");
	var selectedFloor = parseInt(document.getElementById("fVal").value);
	switch (selectedFloor) {
		case 1:
			theCanvas.setAttribute("style", "background: url(../kart/kart_KE_1etg.jpg)");
			changeEdgesAndNodes();
			oldFloor = 1;
			break;
		case 2:
			theCanvas.setAttribute("style", "background: url(../kart/kart_KE_2etg.jpg)");
			changeEdgesAndNodes();
			oldFloor = 2;
			break;
		case 3:
			theCanvas.setAttribute("style", "background: url(../kart/kart_KE_3etg.jpg)");
			changeEdgesAndNodes();
			oldFloor = 3;
			break;
		case 4:
			theCanvas.setAttribute("style", "background: url(../kart/kart_KE_4etg.jpg)");
			changeEdgesAndNodes();
			oldFloor = 4;
			break;
		case 5:
			theCanvas.setAttribute("style", "background: url(../kart/kart_KE_5etg.jpg)");
			changeEdgesAndNodes();
			oldFloor = 5;
			break;	
	}
}
	var floorNodeListArray = ["","nodes/ke/1.txt", "nodes/ke/2.txt", "nodes/ke/3.txt", "nodes/ke/4.txt", "nodes/ke/5.txt"];
function loadNodes(){
 	tempFloor = oldFloor;
		for(var n = 1; n < floorNodeListArray.length; n++){
		oldFloor = n;
		currentNodes = getOldArray();
		jQuery.ajax({
			async: false,
			url: floorNodeListArray[n],
			dataType: 'text',
			type: "GET",
			cache: false,
			success: function(data) {
		   		var newArray = data.split(",");
				for (var i = 0; i<=newArray.length; i+=5) {
					if(newArray[i] != undefined){
						currentNodes[0][currentNodes[0].length] = newArray[i]+","+newArray[i+1]+","+newArray[i+2]+","+newArray[i+3]+","+newArray[i+4];
					}
				}           
			}
		});
	}
	oldFloor = tempFloor;
}

var floorEdgeListArray = ["","edges/ke/1.txt", "edges/ke/2.txt", "edges/ke/3.txt", "edges/ke/4.txt", "edges/ke/5.txt"];
function loadEdges(){
	tempFloor  = oldFloor;
	for(var n = 1; n < floorEdgeListArray.length; n++){
		oldFloor = n;
		currentEdges = getOldArray();
		jQuery.ajax({
			async: false,
			url: floorEdgeListArray[n],
			dataType: 'text',
			type: "GET",
			cache: false,
	  		success: function(data) {
	    		var newArray = data.split(",");
				for (var i = 0; i<=newArray.length-9; i+=9) {
					if((newArray[i] != undefined || newArray.length != 0) && (currentEdges[0].checkId(newArray[i+4]) != -1) && (newArray[i+7] != "gang" || currentEdges[0].checkId(newArray[i+1]) != -1)){
						currentEdges[1][currentEdges[1].length] = newArray[i]+","+newArray[i+1]+","+newArray[i+2]+","+newArray[i+3]+","+newArray[i+4]+","+newArray[i+5]+","+newArray[i+6]+","+newArray[i+7]+","+newArray[i+8];
					}
				}
	  		}
		});
	}
	oldFloor = tempFloor;
}

function findPrevId(){
	var idVal = -1;
	tempfloor = oldFloor;
	for(var listIdx = 1; listIdx <= 5; listIdx++){
		oldFloor = listIdx;
		var nodes = getOldArray()[1];
		for(var elems = 0; elems < nodes.length; elems++){
			nodeSplit = nodes[elems].split(",");
			if(parseInt(nodeSplit[0]) > parseInt(idVal)){
				idVal = nodeSplit[0];
			}
		}
	}
	oldFloor = tempfloor;
	return idVal;
}

function currentIdVal(){
	return parseInt(findPrevId());  
}

function saveEdges(){
	if (edges1.length == 0 && edges2.length == 0 && edges3.length == 0 && edges4.length == 0 && edges5.length == 0) {
		var feedback = confirm("All the arrays is empty, are you sure you wanna save?");
		if(!feedback) return;
	}
	writeEdgesToFile();	
}
function writeEdgesToFile(){
	tempFloor = oldFloor;
	for(var i = 1;  i< floorEdgeListArray.length; i++){
		oldFloor = i;
		save = getOldArray();
		var file = String(floorEdgeListArray[i]);
		var data = save[1];
		var xmlhttp;
		if(window.XMLHttpRequest) {
			xmlhttp=new XMLHttpRequest();
		}else {
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("POST","operations.php?data="+data+"&file="+file,true);
		xmlhttp.send();
	}
}