//Funksjon for kantene mellom nodene, legger inn her og om det er en trap eller heis.
function Edge(type, destinationNode, cost){
	//type=1 er trapp og cost blir 3
	this.type = type;
	this.destinationNode = destinationNode;
	if(type === 1){
		this.cost = 3;
	}
	//type=2 er heis og cost blir 20
	else if(type === 2){
		this.cost = 20;
	}
	//type=0 er ikke trap eller heis
	else if(type === 0){
		this.cost = cost;
	}
	
	//Henter "mål" noden til kanten.
	this.getDestNode = function(){
		return this.destinationNode;	
	};
	//Henter "cost" til kanten.
	this.getCost = function(){
		return this.cost;
	};
	this.getType = function(){
		return this.type;
	};
	//Endrer costen til stairs når man aktivere eller deaktivere "handicap mode"
	this.handicapedge = function(){
		if(type === 1){
			if(this.cost === 1000){
				this.cost = 3;
			}
			else if (this.cost === 3){
				this.cost = 1000;
			}
		}
	};
	//toString metode for testing av kanten.
	this.toString = function(){
		return "Destionation node: " + this.destinationNode + " costs: " + this.cost;	
	};
}