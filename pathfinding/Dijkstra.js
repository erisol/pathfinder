// implementasjonen av pathfinding algorithmen, insperasjon hentet fra java appleten(Fiks kilde senere)
function dijkstra(){
	var nodes = new Array();
	var cost = new Cost();

//Funksjon som returnere alle nodene som er i algorithmen sin array.
this.getNodes = function(){
	return nodes;	
};

//Paremetere: newNodes skal være en Array av nodes som blir lagret igjen i den lokale nodes variabelen.
this.addNodes = function(newNodes){
	for(var idx = 0; idx < newNodes.length; idx++){
		nodes.push(newNodes[idx]);
	}
};

//Funksjon som "Restarte" alle nodene i algorithmen sin array, den vil da sette allreadyDone = 0, cost = 1000000 og prevNode lik sin egen id.
this.restartNodes = function(){
	for(var idx = 0; idx < nodes.length; idx++){
		nodes[idx].reboot();
	}
};

//Parametere: nodes er en array over noder som algorithmen har kommet til men ikke kalkulert enda, currentEndCost er den nåverende costen får å komme seg til endNode
//Denne funksjonen blir bare kjørt om algorithmen har funnet en veg til endNode, den vil da kjøre igjennom en liste over noder han enda ikke har sjekket pathen til, og se om det er noen andre noder som kan ha en mulig mer optimal path, vist det finnes returneres true, ellers returneres false.
this.checkPaths = function(nodes, currentEndCost){
	for(var indx = 0; indx < nodes.length; indx++){
		if(nodes[indx].getCost() < currentEndCost){
			return false;
		}
	}
	return true;
};

//Funksjon som kalkulere cost får å komme seg fra startNode til endNode, dette gjør den med å gå inn i en node å kalkulere cost får å komme til nabonoder, han vil så ta en nabonode å gjøre det samme, set vil bli gjort helt til vi er i endNode, og checkPaths() returnere true.
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

//Blir brukt til å lage objekter som blir lagret i en array i pathFind når den har funnet en ny optimalcostpath til en ny node
function dijkstraNodes(node, cost){
	this.node = node;
	this.cost = cost;
};