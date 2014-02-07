// JavaScript Document
function Cords(x, y){
	this.x = x;
	this.y = y;
	this.getXCord = function(){
		return x;
	};
	this.getYCords = function(){
		return y;
	};
	this.setCords = function(x, y){
		this.x = x;
		this.y = y;
	};
}