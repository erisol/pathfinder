//Function to make a node
function Node(id, x, y){
	this.id = id;
	var cords = new Cords(x, y);
	var cost;
	var neighbors = new Array();
	var stair = false;
	var stairCost = 3;
	var prevNode;
	
}
//Adds a neighbor to the node.
Node.prototype.addneighbor = function(id,cost){
	this.neighbors.push(new Edge(id, cost));
}
//Sets the cost to get to this node from the start node
Node.prototype.setCost = function(cost){
	this.cost = cost;	
}
//Sets the cords of this node relative to the image(map)
Node.prototype.setCords = function(x, y){
	cords.setCords(x, y);
}
//Sets the id of the previus node in the path
Node.prototype.setPrevNode = function(nodeid){
	this.prevNode = nodeid;
}
//Sets if this is a stair
Node.prototype.setStair= function(isStair, cost){
	this.stair = isStair;
	this.cost = cost;
}
//Gets the previus node
Node.prototype.getPrevNode = function(){
	return this.prevNode;
}
//Gets the cordinates of the this node
Node.prototype.getCords = function(){
	return this.cords;
}
//Gets the cost to get to the this node
Node.prototype.getCost = function(){
	return this.cost;
}
//Finds all the neighbor nodes and returns them
Node.prototype.getneighbors = function(){
	return this.neighbors;
}