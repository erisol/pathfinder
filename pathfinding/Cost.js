// JavaScript Document
function Cost(){
	var cost = 0;
	this.add = function(add){
		cost += add;
	};
	this.getCost = function(){
		return cost;	
	};
}