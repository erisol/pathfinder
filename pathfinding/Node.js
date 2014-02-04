// JavaScript Document
function node(id, x, y){
	this.id = id;
	var cords = new Cords(x, y);
	var cost;
	var neighbors = new Array();
	var stair = false;
	var stairCost = 3;
	var prevNode;
	
}
//Adds a neighbor to the node.
node.prototype.addneighbor = function(id){
	neighbors.push(id);
}
//Sets the cost to get to this node from the start node
node.prototype.setCost = function(cost){
	this.cost = cost;	
}
//Sets the cords of this node relative to the image(map)
node.prototype.setCords = function(x, y){
	cords.setCords(x, y);
}
//Sets the id of the previus node in the path
node.prototype.setPrevNode = function(nodeid){
	this.prevNode = nodeid;
}
//Sets if this is a stair
node.prototype.setStair= function(isStair, cost){
	this.stair = isStair;
	this.cost = cost;
}
//Gets the previus node
node.prototype.getPrevNode = function(){
	return this.prevNode;
}
//Gets the cordinates of the this node
node.prototype.getCords = function(){
	return this.cords;
}
//Gets the cost to get to the this node
node.prototype.getCost = function(){
	return this.cost;
}
//Finds all the neighbor nodes and returns them
node.prototype.getneighbors = function(){
	return this.neighbors;
}