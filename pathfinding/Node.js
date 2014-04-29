//Parametere: id skal være en unik verdi for hver node, x/y er kordinatene i kordinatsystemet, men z er etasjen denne noden tilhører.
function Node(id, x, y, z){
	this.id = id;
	var coords = new Coords(x, y, z);
	var cost = Number.MAX_VALUE;
	var neighbors = new Array();
	var prevNode = this;
	var allReadyDone = 0; 
	
	//Reseter noden til hvordan han var orginalt, blir brukt når det skal kalkuleres nye path.
	this.reboot = function(){
		prevNode = this;
		cost = Number.MAX_VALUE;
		allReadyDone = 0;
	};
	//Setter denne noden til å være ferdig kalkulert av algorithmen.
	this.setDone = function(){
		allReadyDone = 1;
	};
	//Sjekker om denne noden er ferdig kalkulert av algorithmen
	this.isDone = function(){
		return allReadyDone;
	};
	//Legger til en nabo node(En kant som man kan gå på til å komme til neste node)
	this.addNeighbor = function(type, id, cost){
		try{ 
		neighbors.push(new edge(type, id, cost));	
		}catch(addNeighborErr){
				console.log("(NODE)Could not add neighbor type: " + type + " id: " + id + "cost : " +cost + "\n" + addNeighborErr);
		}
	};
	//Parametere: optCost er hva den foreslåte nye costen får å komme til denne noden skal være, node er hvilken node man kommer fra får å oppnå denne costen.
	//setter "cost" for å komme til denne noden(Denne gangen algortimen blei kjørt, vist han finner en path som var mer effektiv overskrives denne)
	this.setOptimalCostPath = function(optCost, newNode){
		try{
			if(this.getCost() > optCost){
				cost = optCost;
				setPrevNode(newNode);
				console.log("CHANGE PATH");
				return true;
			}
			return false;
		}catch(setOptCostPatherr){
			console.log("(NODE)Error changing optimal path: " + setOptCostPatherr);
		}
	};
	//Setter kordinatene til noden, tenkt brukt i sammenheng med kartene, hvor z er etasjen.
	this.setCoords = function(x, y, z){
		coords.setCoords(x, y, z);
	};
	//Setter hva som var den forrige noden, i følge den optimale pathen.
	var setPrevNode = function(nodeId){
		prevNode=nodeId
	};
	//Henter inn hva den forrige noden var, i forhold til optimalpath
	this.getPrevNode = function(){
		if(prevNode !== null){
			return prevNode;
		}
	};
	//Funksjon som endrer alle kantene til noden til enten å være i "handicap mode" eller omvendt.
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
	//Henter alle nabo noder(Kanter som man kan bruke til å gå til andre noder).
	this.getNeighbors = function(){
		return neighbors;
	};
	//Funksjon som kan brukes til å få en enkel oversikt over hva en node innholder.
	this.toString = function(){
		return "This nodes id is " + id + "\n" + coords.toString() + "and the current cost to get to the node is " + cost + "\n";	
	};
	//Funksjon som printer ut alle naboene til den noden den blir kalt i.
	this.printNeighbors = function(){
		var neighEdges = "Edges:\n";
		try{
			for(var len = 0; len < neighbors.length; len++){
				neighEdges += neighbors[len].toString() + "\n";		
			}
		}catch(printNeighborErr){
			console.log("(NODE)Error printing out the edges of the node: " + printNeighborErr);
		}
		return neighEdges;
	};
}