// JavaScript Document
function edge(destinationNode, cost){
	this.destinationNode = destinationNode;
	this.cost = cost;
}
edge.prototype.getCost = function(){
	return this.cost;
}
edge.prototype.getDestNode = function(){
	return this.destinationNode;
}