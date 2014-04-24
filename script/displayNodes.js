function loadNodesAndEdges(displayFloor) {
	
	Array.prototype.checkId = function(value){
		for(var indx = 0; indx < this.length; indx++){
			var testArray = this[indx].id;
			if(testArray[0] == value){
				return indx;
			}
		}
		return -1;
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
	
	var display = new Load();
	
	var displayNodes = display.loadNodes();
	var displayEdges = display.loadEdges();
	rooms = displayNodes[5];
	nodes = new Array();
	
	var testDisplayNodes = displayNodes[displayFloor-1];
	var testDisplayEdges = displayEdges[displayFloor-1];
		
	for (var i = 0; i < testDisplayEdges.length-1; i++) {
			this.testDisplayNodes[checkId(testDisplayEdges[i].node1)].addNeighbor[testDisplayEdges[i].type, testDisplayNodes[checkId(testDisplayEdges[i].node2), testDisplayEdges[i].cost]];
			this.testDisplayNodes[checkId(testDisplayEdges[i].node2)].addNeighbor[testDisplayEdges[i].type, testDisplayNodes[checkId(testDisplayEdges[i].node1), testDisplayEdges[i].cost]];
		
	}
	
	for (var k = 0; k < displayNodes[displayFloor-1].length; k++) {
		drawNodes(displayNodes[displayFloor-1][k].getCoords().getXCoord(), displayNodes[displayFloor-1][k].getCoords().getYCoord(), displayNodes[displayFloor-1][k].id);
		
	}
	
	

	var dijkstraPath = new dijkstra();
	dijkstraPath.addNodes(testDisplayNodes);
	var startNode = testDisplayNodes[0];
	var goal = testDisplayNodes[testDisplayNodes.length-1];
	dijkstraPath.pathFind(startNode, goal);
	var drawtool = new Draw();
	drawtool.drawPath(startNode, goal);	
	
}

function removeDraw() {
		removeDrawnNode = "[id^=nodediv]";
		$(removeDrawnNode).remove();
	}
	