// JavaScript Document
function cords(x, y){
	this.x = x;
	this.y = y;
}
cords.prototype.getXCord = function(){
	return this.x;
}
cords.prototype.getYCords = function(){
	return this.y;
}
cords.prototype.setCords = function(x, y){
	this.x = x;
	this.y = y;
}