//Funksjonen for en node.
function Node(id, x, y){
	this.id = id;
	var cords = new Cords(x, y);
	var cost = 10000;
	var neighbors = new Array();
	var prevNode = id;
	//Legger til en nabo node(En kant som man kan gå på til å komme til neste node) 
	this.addneighbor = function(type, id, cost){
		neighbors.push(new Edge(type, id, cost));	
	};
	//setter "cost" for å komme til denne noden(Denne gangen algortimen blei kjørt, vist han 
	//finner en path som var mer effektiv overskrives denne)
	this.setOptimalCostPath = function(OptCost, nodeid){
		if(this.getCost() > OptCost){
			cost = OptCost;
			setPrevNode(nodeid);
		}
	};
	//Setter kordinatene til noden, tenkt brukt i sammenheng med kartene.
	this.setCords = function(x, y){
		cords.setCords(x, y);
	};
	//Setter hva som var den forrige noden, i følge den optimale pathen.
	var setPrevNode = function(nodeid){
		prevNode=nodeid;
	};
	//Henter inn hva den forrige noden var
	this.getPrevNode = function(){
		if(prevNode !== null){
			return prevNode;
		}
	};
	//Metode som endrer alle kantene til noden til enten å være i "handicap mode" eller omvendt.
	this.handicap = function(){
		for(var edgenr = 0; edgenr<neighbors.length; edgenr++){
			neighbors[edgenr].handicapedge();
		}
	};
	//Henter inn kordinatene til noden.
	this.getCords = function(){
		return cords;
	};
	//Henter "cost" til noden.
	this.getCost = function(){
		return cost;
	};
	//Henter alle nabonoder(Kanter som man kan bruke til å gå til andre noder).
	this.getneighbors = function(){
		return neighbors;
	};
	this.toString = function(){
		return "This nodes id is " + id + "\n" + cords.toString() + "and the current cost to get to the node is " + cost + "\n";	
	}
	this.printneighbors = function(){
		var neighedges = "Edges:\n";
		for(var len = 0; len < neighbors.length; len++){
			neighedges += neighbors[len].toString() + "\n";		
		}
		return neighedges;
	}
}