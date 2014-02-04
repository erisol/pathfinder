// JavaScript Document
function cost(){
	var cost = 0;
}
cost.prototype.add = function(add){
	this.cost += add;	
}
cost.prototype.getCost = function(){
	return this.cost;
}