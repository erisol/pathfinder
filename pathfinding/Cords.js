//Funksjon for lagring av kordinater.
function Coords(x, y, z){
	this.x = x;
	this.y = y;
	this.z = z;
	//Henter x kordinatene til noden.
	this.getXCoord = function(){
		return this.x;
	};
	//Henter y kordinatene til noden.
	this.getYCoord = function(){
		return this.y;
	};
	//Henter ut etasjen til noden.
	this.getZCoord = function(){
		return this.z;
	}
	//Setter x og y kordinater til noden.
	this.setCoords = function(x, y, z){
		this.x = x;
		this.y = y;
		this.z = z;
	};
	//toString metode for testing av kordinater.
	this.toString = function(){
		return "This nodes coordinates are: x = " + this.x + "  y = " + this.y + " z = " + this.z;
	};
}