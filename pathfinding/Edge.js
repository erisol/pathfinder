// JavaScript Document
function Edge(destinationNode, cost){
	this.destinationNode = destinationNode;
	this.cost = cost;
	this.getDestNode = function(){
		return destinationNode;	
	};
	this.getCost = function(){
		return cost;
	};
	this.toString = function(){
		return "Destionation node: " + this.destinationNode + " costs: " + this.cost;	
	};
}