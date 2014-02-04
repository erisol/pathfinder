// JavaScript Document
function Cost(){
	var cost = 0;
}
Cost.prototype.add = function(add){
	this.cost += add;	
}
Cost.prototype.getCost = function(){
	return this.cost;
}