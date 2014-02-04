// JavaScript Document
function Cords(x, y){
	this.x = x;
	this.y = y;
}
Cords.prototype.getXCord = function(){
	return this.x;
}
Cords.prototype.getYCords = function(){
	return this.y;
}
Cords.prototype.setCords = function(x, y){
	this.x = x;
	this.y = y;
}