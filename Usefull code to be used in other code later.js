// JavaScript Document
function edge(node1, node2, type, cost){
	this.node1 = node1;
	this.node2 = node2;
	this.type = type; 
	this.cost = cost;
}
function readeverythingfromfile(){}

function makenNodes(nodeList, edgeList){
	var id=0;
	var nodes = new Array();
	for(var nr = 0; nr < nodeList.length; nr){
		this.x = nodeList[nr].getxvalue();
		this.y = nodeList[nr].getyvalue();
		this.z = nodeList[nr].getzvalue();
		nodes.push(new Node(id, x, y, z));
	}
	for(var idx = 0; idx <  edgeList.length; idx++){
		edgeList[idx].node1.addNeighbor(edgeList[idx].node2, edgeList[idx].type, edgeList[idx].cost);
		edgeList[idx].node2.addNeighbor(edgeList[idx].node1, edgeList[idx].type, edgeList[idx].cost);
	}
}
Array.prototype.indexofvarinobject = function(variabel, value){
	for(var indx = 0; indx < this.length; indx++){
		if(eval("this[indx]."+variabel) === value){
			return indx;
		}
	}
	return -1;
}