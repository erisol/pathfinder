//Function to make a node
function Node(id, x, y){
	this.id = id;
	cords = new Cords(x, y);
	cost = 10000;
	neighbors = new Array();
	stair = false;
	stairCost = 3;
		
	this.addneighbor = function(id, cost){
		neighbors.push(new Edge(id, cost));	
	};
	this.setCost = function(cost){
		cost = cost;
	};
	this.setCords = function(x, y){
		cords.setCords(x, y);
	};
	this.setPrevNode = function(nodeid){
		this.prevNode=nodeid;
	};
	this.getPrevNode = function(){
		if(prevNode !== null){
			return this.prevNode;
		}
	};
	this.getCords = function(){
		return cords;
	};
	this.getCost = function(){
		return cost;
	};
	this.getneighbors = function(){
		return neighbors;
	};
}