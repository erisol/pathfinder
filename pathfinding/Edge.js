// JavaScript Document
function Edge(destinationNode, cost){
	this.destinationNode = destinationNode;
	this.cost = cost;
}
Edge.prototype.getCost = function(){
	return this.cost;
}
Edge.prototype.getDestNode = function(){
	return this.destinationNode;
}