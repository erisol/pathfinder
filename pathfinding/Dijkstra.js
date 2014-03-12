// JavaScript Document
function dijkstra(){
	var nodes = new Array();
	var cost = new Cost();
	
this.getNodes = function(){
	return nodes;	
};

this.addNodes = function(newNodes){
	for(var idx = 0; idx < newNodes.length; idx++){
		nodes.push(newNodes[idx]);
	}
};

this.restartNodes = function(){
	for(var idx = 0; idx < nodes.length; idx++){
		nodes[idx].reboot();
	}
};

this.checkPaths = function(nodes, currentEndCost){
	for(var indx = 0; indx < nodes.length; indx++){
		if(nodes[indx].getCost() < currentEndCost){
			return false;
		}
	}
	return true;
};

this.pathFind = function(startNode, endNode){
	cost.restart();
	this.restartNodes();
	var path = new Array();
	path.push(new dijkstraNodes(startNode, 0));
	startNode.setOptimalCostPath(0);
	var calculatedNodes = 0;
	var newNodes = new Array();
	newNodes.push(startNode);
	while(newNodes.length !== 0 && calculatedNodes < nodes.length){
		var currentNode = newNodes.shift();
		if(currentNode.id == endNode.id){	
			if(this.checkPaths(newNodes, currentNode.getCost())){	
				return;
			}
		}
		if(currentNode.getCost() < endNode.getCost() && currentNode.isDone() !== 1){
           	currentNode.setDone();
			calculatedNodes++;
			var currentNeighbors = currentNode.getNeighbors();
			for(var idx = 0; idx < currentNeighbors.length; idx++){
				var destNode = currentNeighbors[idx].getDestNode();
				var edgeCost = currentNeighbors[idx].getCost();
				if(destNode.getCost() > currentNode.getCost() + edgeCost){
					destNode.setOptimalCostPath(edgeCost + currentNode.getCost(), currentNode);
					newNodes.push(destNode);
					path.push(new dijkstraNodes(destNode, destNode.getCost()));
				}
			}
		}
	}
};

}


function dijkstraNodes(node, cost){
	this.node = node;
	this.cost = cost;
};