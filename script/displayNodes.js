	Array.prototype.checkId = function(value){
		for(var indx = 0; indx < this.length; indx++){
			var testArray = this[indx].id;
			if(testArray[0] == value){
				return indx;
			}
		}
		return -1;
	}
	
	var display = new Load();
	
	var displayNodes = display.loadNodes();
	var displayEdges = display.loadEdges();
	rooms = displayNodes[5];
	nodes = new Array();
	
	if (currentFloor == 5) {
	
		var testDisplayNodes = displayNodes[4];
		var testDisplayEdges = displayEdges[4];
		
		for (var i = 0; i < testDisplayEdges.length-1; i++) {
			this.testDisplayNodes[checkId(testDisplayEdges[i].node1)].addNeighbor[testDisplayEdges[i].type, testDisplayNodes[checkId(testDisplayEdges[i].node2), testDisplayEdges[i].cost]];
			this.testDisplayNodes[checkId(testDisplayEdges[i].node2)].addNeighbor[testDisplayEdges[i].type, testDisplayNodes[checkId(testDisplayEdges[i].node1), testDisplayEdges[i].cost]];
		}
		
		var dijkstraPath = new dijkstra();
		dijkstraPath.addNodes(testDisplayNodes);
		var startNode = testDisplayNodes[0];
		var goal = testDisplayNodes[testDisplayNodes.length-1];
		dijkstraPath.pathFind(startNode, goal);
		var drawtool = new Draw();
		drawtool.drawPath(startNode, goal,0);
		

			
	}