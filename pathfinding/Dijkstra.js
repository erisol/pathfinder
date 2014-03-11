// JavaScript Document
function Dijkstra(){
	var nodes = new Array();
	var cost = new Cost();
	
this.getnodes = function(){
	return nodes;	
};

this.addnodes = function(newnodes){
	for(var idx = 0; idx < newnodes.length; idx++){
		nodes.push(newnodes[idx]);
	}
};

this.restartnodes = function(){
	for(var idx = 0; idx < nodes.length; idx++){
		nodes[idx].reboot();
	}
};

this.pathfind = function(startnode, endnode){
	cost.restart();
	this.restartnodes();
	var path = new Array();
	path.push(new Dijkstranodes(startnode, 0));
	startnode.setOptimalCostPath(0);
	var calculatednodes = 0;
	var newnodes = new Array();
	newnodes.push(startnode);
	var fail = 0;
	while(newnodes.length !== 0 && calculatednodes < nodes.length){
			var currentnode = newnodes.shift();
			if(currentnode.id == endnode.id){	
				if(checkpaths(newnodes, currentnode.getCost())){	
					return;
				}
			}
			if(currentnode.isdone() !== 1){
            	currentnode.setdone();
				calculatednodes++;
				var currentneighbors = currentnode.getneighbors();
				for(var idx = 0; idx < currentneighbors.length; idx++){
					var destnode = currentneighbors[idx].getDestNode();
					var edgecost = currentneighbors[idx].getCost();
					if(destnode.getCost() > currentnode.getCost() + edgecost){
						destnode.setOptimalCostPath(edgecost + currentnode.getCost(), currentnode);
						newnodes.push(destnode);
						path.push(new Dijkstranodes(destnode, destnode.getCost()));
					}else{fail++;}
				}
			}
		}
	}
};
function checkpaths(nodes, currentendcost){
	for(var indx = 0; indx <nodes.length; indx++){
		if(nodes[indx].getCost < currentendcost){
			return false;
		}
	}
	return true;
}
function Dijkstranodes(node, cost){
	this.node = node;
	this.cost = cost;
};