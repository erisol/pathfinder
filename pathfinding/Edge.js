//Funksjon for kantene mellom nodene, legger inn her og om det er en trap eller heis.
function edge(type, destinationNode, cost){
	//type=trapp og cost blir 3
	this.type = type;
	this.destinationNode = destinationNode;
	if(type === "trapp"){
		this.cost = 3;
	}
	//type=heis og cost blir 20
	else if(type === "heis"){
		this.cost = 20;
	}
	//type er ikke trap eller heis
	else if(type === "gang"){
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
	//returnere om det er en trapp, heis eller gang edge
	this.getType = function(){
		return type;
	};
	//Setter hvliken type edge det er(0=gang,1=trapp,2=heis)
	this.setType = function(type){
		this.type = type;
	}
	//Endrer costen til stairs når man aktivere eller deaktivere "handicap mode"
	this.handicapEdge = function(){
		if(type === "trapp"){
			if(this.cost === 10000){
				this.cost = 3;
			}
			else if (this.cost === 3){
				this.cost = 10000;
			}
		}
	};
	//toString metode for testing av kanten.
	this.toString = function(){
		return "Destionation node: " + this.destinationNode.id + " costs: " + this.getCost() + " type: " + this.getType();	
	};
}