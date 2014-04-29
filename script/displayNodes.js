function LoadNodesAndEdges() {
	activePath = false;
	var display = new Load();
	var displayNodes = display.loadNodes();
	var edges = display.loadEdges();
	addAllNeighbors(display.loadEdges());
	rooms = displayNodes[5];
	var dijkstraPath = new dijkstra();
	addTheNodes(displayNodes);
	var drawtool = new Draw();
	Array.prototype.checkId = function(value){
		for(var indx = 0; indx < this.length; indx++){
			var testArray = this[indx].id;
			if(testArray[0] == value){
				return indx;
			}
		}
		return -1;
	}
	
	function addTheNodes(nodelist){
		for(var indx = 0; indx<displayNodes.length-1;indx++){
			dijkstraPath.addNodes(displayNodes[indx]);
		}
	}
	
	function drawNodes(x, y, oldId){
		var getCanvas = document.getElementById("canvas");
		var node = document.createElement("div");
		var nodeId = String("nodediv"+oldId);
		node.setAttribute("id", nodeId);
		node.style.height = "6px";
		node.style.width = "6px";
		node.style.backgroundColor = "#FF0000";
		node.style.cssFloat ="left";
		node.style.left = (parseInt(x))+"px";
		node.style.top = parseInt(y)+"px";
		node.style.position = "absolute";
		node.style.display = "visible";
		getCanvas.appendChild(node);
	}
	

	function addAllNeighbors(neighbors){
		for (var i = 0; i < edges.length-1; i++) {
			var node1 = displayNodes[edges[i].floor1-1][edges[i].node1];
			var node2 = displayNodes[edges[i].floor2-1][edges[i].node2];
			node1.addNeighbor(edges[i].type, node2, edges[i].cost);
			node2.addNeighbor(edges[i].type, node1, edges[i].cost);
		}
	}
	function drawCurrentFloorNodes(displayFloor){
		for (var k = 0; k < displayNodes[displayFloor-1].length; k++) {
			drawNodes(displayNodes[displayFloor-1][k].getCoords().getXCoord(), displayNodes[displayFloor-1][k].getCoords().getYCoord(), displayNodes[displayFloor-1][k].id);
		}
	}
	
	this.convertAndPathFind = function(roomNr1,roomNr2,curFloor){
		activePath = true;
		start = getNode(findPosition(roomNr1));
		goal = getNode(findPosition(roomNr2));
		dijkstraPath.pathFind(start, goal);
		drawtool.drawPath(start, goal,curFloor);
		return findPosition(roomNr1)[0];
	}
	var findPosition = function(roomNr){
		for(var indx = 0; indx < rooms.length; indx++){
			if(rooms[indx].roomNumber == roomNr){
				return [rooms[indx].floorArray,rooms[indx].pos];
			}
		}
		return -1;
	}
	
	var getNode = function(node){
		if(node[0] == 1){
			return displayNodes[0][node[1]];
		}else if(node[0] == 2){
			return displayNodes[1][node[1]];
		}else if(node[0] == 3){
			return displayNodes[2][node[1]];
		}else if(node[0] == 4){
			return displayNodes[3][node[1]];
		}else if(node[0] == 5){
			return displayNodes[4][node[1]];
		}
	}
	this.changeFloorDisplay = function(curFloor){
		if(activePath && curFloor != 0){
			removeDraw();
			drawtool.drawPath(start, goal,curFloor);	
		}
	}
}
function removeDraw() {
		removeDrawnEdge = "[id^=line]";
		removeDrawnNode = "[id^=nodediv]";
		removeDrawnVisualNode = "[id^=dNode]";
		$(removeDrawnVisualNode).remove();
		$(removeDrawnNode).remove();
		$(removeDrawnEdge).remove();
}
	