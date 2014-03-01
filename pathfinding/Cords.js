//Funksjon for lagring av kordinater.
function Cords(x, y){
	this.x = x;
	this.y = y;
	//Henter x kordinatene til noden.
	this.getXCord = function(){
		return this.x;
	};
	//Henter y kordinatene til noden.
	this.getYCord = function(){
		return this.y;
	};
	//Setter x og y kordinater til noden.
	this.setCords = function(x, y){
		this.x = x;
		this.y = y;
	};
	//toString metode for testing av kordinater.
	this.toString = function(){
		return "This nodes cordinates are: x = " + this.x + "  y = " + this.y;
	};
}