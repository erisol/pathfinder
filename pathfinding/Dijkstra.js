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
var restartNodes = function(){
	for(var idx = 0; idx < nodes.length; idx++){
		nodes[idx].reboot();
	}
};

//Parametere: nodes er en array over noder som algorithmen har kommet til men ikke kalkulert enda, currentEndCost er den nåverende costen får å komme seg til endNode
//Denne funksjonen blir bare kjørt om algorithmen har funnet en veg til endNode, den vil da kjøre igjennom en liste over noder han enda ikke har sjekket pathen til, og se om det er noen andre noder som kan ha en mulig mer optimal path, vist det finnes returneres true, ellers returneres false.
this.checkPaths = function(nodes, currentEndCost){
	for(var indx = 0; indx < nodes.length; indx){
		if(nodes[indx].node.getCost() < currentEndCost){
			return false;
		}
		nodes.splice(indx,1);
	}
	return true;
};

//Funksjon som kalkulere cost får å komme seg fra startNode til endNode, dette gjør den med å gå inn i en node å kalkulere cost får å komme til nabonoder, han vil så ta en nabonode å gjøre det samme, set vil bli gjort helt til vi er i endNode, og checkPaths() returnere true.
this.pathFind = function(startNode, endNode){
	cost.restart();
	restartNodes();
	var path = new Array();
	path.push(new dijkstraNodes(startNode, 0));
	startNode.setOptimalCostPath(0);
	var calculatedNodes = 0;
	var newNodes = new Array();
	newNodes.priorityAdd(new dijkstraNodes(startNode, 0));
	while(newNodes.length !== 0 && calculatedNodes < nodes.length){
		var currentNode = newNodes.shift();
		if(currentNode.node.id == endNode.id){
			if(this.checkPaths(newNodes, currentNode.node.getCost())){
				return;
			}
		}
		if(currentNode.node.getCost() < endNode.getCost() && currentNode.node.isDone() !== 1){
           	currentNode.node.setDone();
			calculatedNodes++;
			var currentNeighbors = currentNode.node.getNeighbors();
			for(var idx = 0; idx < currentNeighbors.length; idx++){
				var destNode = currentNeighbors[idx].getDestNode();
				var edgeCost = currentNeighbors[idx].getCost();
				if(destNode.getCost() > currentNode.node.getCost() + edgeCost){
					destNode.setOptimalCostPath(edgeCost+currentNode.node.getCost(), currentNode.node);
					newNodes.priorityAdd(new dijkstraNodes(destNode, destNode.getCost()));
					path.push(new dijkstraNodes(destNode, destNode.getCost()));
				}
			}
		}
	}
};

Array.prototype.priorityAdd = function(dijkstraNode){
		for (var i = 0; i < this.length; i++) {
			if (parseInt(dijkstraNode.cost) < parseInt(this[i].cost)) {
                this.splice(i, 0, dijkstraNode);
                return;
            }
        }
		this.push(dijkstraNode);
};
}

//Blir brukt til å lage objekter som blir lagret i en array i pathFind når den har funnet en ny optimalcostpath til en ny node
function dijkstraNodes(node, cost){
	this.node = node;
	this.cost = cost;
};