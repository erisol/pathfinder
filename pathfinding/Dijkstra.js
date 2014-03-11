// JavaScript Document
function djikstra(){
	var nodes = new Array();
	var cost = new Cost();
Array.prototype.getlast = function() {
    return this[this.length-1];
}
this.getnodes = function(){
	return nodes;	
}

this.addnodes = function(newnode){
	nodes.push(newnode);	
}

this.restartnodes = function(){
	for(node in nodes){
		node.restart();
	}
}

this.pathfind = function(startnode, endnode){
	cost.restart();
	restartnodes();
	var path = new Array();
	path.add(startnode);
	startnode.setOptimalCostPath(0);
	var calculatednodes = 1; 
	var newnode = 1;
	while(newnode != 0 && calculatednoes < nodes.length()){
		var currentnode = path.getlast();
		if(currentnode.id == endnode.id){
			return;
		}
		calculatednodes++;
		newnode = 0;
		for(edge in currentnode.getneighbors()){
			var destnode = edge.getDestNode();
			var destnodecost = edge.getCost();
				
			if(destnode.getCost() > destnodecost + currentnode.getCost()){
				destnode.setCost(destnodecost + currentnode.getCost());
				destnode.setPrevNode(currentnode);
				newnode++;
				path.add(destnode);
			}
		}
	}
}

}