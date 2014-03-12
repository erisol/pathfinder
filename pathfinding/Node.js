//Funksjonen for en node.
function Node(id, x, y, z){
	this.id = id;
	var coords = new Coords(x, y, z);
	var cost = 1000000;
	var neighbors = new Array();
	var prevNode = this;
	var allReadyDone = 0;
	//Legger til en nabo node(En kant som man kan gå på til å komme til neste node) 
	this.reboot = function(){
		prevNode = id;
		cost = 1000000;
		allReadyDone = 0;
	};
	this.setDone = function(){
		allReadyDone = 1;
	};
	this.isDone = function(){
		return allReadyDone;
	};
	this.addNeighbor = function(type, id, cost){
		try{ 
		neighbors.push(new edge(type, id, cost));	
		}catch(addNeighborErr){
				console.log("(NODE)Could not add neighbor type: " + type + " id: " + id + "cost : " +cost + "\n" + addNeighborErr);
		}
	};
	//setter "cost" for å komme til denne noden(Denne gangen algortimen blei kjørt, vist han 
	//finner en path som var mer effektiv overskrives denne)
	this.setOptimalCostPath = function(optCost, node){
		try{
			if(this.getCost() > optCost){
				cost = optCost;
				setPrevNode(node);
				return true;
			}
			return false;
		}catch(setOptCostPatherr){
			console.log("(NODE)Error changing optimal path: " + setOptCostPatherr);
		}
	};
	//Setter kordinatene til noden, tenkt brukt i sammenheng med kartene.
	this.setCoords = function(x, y, z){
		coords.setCoords(x, y, z);
	};
	//Setter hva som var den forrige noden, i følge den optimale pathen.
	var setPrevNode = function(nodeId){
		prevNode=nodeId;
	};
	//Henter inn hva den forrige noden var
	this.getPrevNode = function(){
		if(prevNode !== null){
			return prevNode;
		}
	};
	//Metode som endrer alle kantene til noden til enten å være i "handicap mode" eller omvendt.
	this.handicap = function(){
		try{
			for(var edgeNr = 0; edgeNr<neighbors.length; edgeNr++){
				neighbors[edgeNr].handicapEdge();
			}
		}catch(nodeHandicapErr){
			console.log("(NODE)Err changing to 'handicap-mode': " + nodeHandicapErr);
		}
	};
	//Henter inn kordinatene til noden.
	this.getCoords = function(){
		return coords;
	};
	//Henter "cost" til noden.
	this.getCost = function(){
		return cost;
	};
	//Henter alle nabonoder(Kanter som man kan bruke til å gå til andre noder).
	this.getNeighbors = function(){
		return neighbors;
	};
	this.toString = function(){
		return "This nodes id is " + id + "\n" + coords.toString() + "and the current cost to get to the node is " + cost + "\n";	
	};
	this.printNeighbors = function(){
		var neighEdges = "Edges:\n";
		try{
			for(var len = 0; len < neighbors.length; len++){
				neighEdges += neighbors[len].toString() + "\n";		
			}
		}catch(printNeighborErr){
			console.log("(NODE)Error printing out the edges of the node: " + printneighborerr);
		}
		return neighEdges;
	};
}