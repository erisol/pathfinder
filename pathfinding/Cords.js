//Funksjon for lagring av kordinater.
function Cords(x, y, z){
	this.x = x;
	this.y = y;
	this.z = z;
	//Henter x kordinatene til noden.
	this.getXCord = function(){
		return this.x;
	};
	//Henter y kordinatene til noden.
	this.getYCord = function(){
		return this.y;
	};
	this.getZCord = function(){
		return this.z;
	}
	//Setter x og y kordinater til noden.
	this.setCords = function(x, y, z){
		this.x = x;
		this.y = y;
		this.z = z;
	};
	//toString metode for testing av kordinater.
	this.toString = function(){
		return "This nodes cordinates are: x = " + this.x + "  y = " + this.y + " z = " + this.z;
	};
}