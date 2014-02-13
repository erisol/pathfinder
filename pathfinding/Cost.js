//Funksjon for lagring av kosten i algoritmen.
function Cost(){
	var cost = 0;
	//Legger til "add"  til cost'en.
	this.add = function(add){
		cost += add;
	};
	//Returnere "cost" til søket.
	this.getCost = function(){
		return cost;	
	};
	//toString for testing av cost
	this.toString = function(){
		return "This cost: " + cost;
	};
}