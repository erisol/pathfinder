function Load(){
	Array.prototype.checkId = function(value){
		for(var indx = 0; indx < this.length; indx++){
			var testArray = this[indx].id;
			if(testArray[0] == value){
				return indx;
			}
		}
		return -1;
	}
	
	var rooms = new Array();
	var edges1 = new Array();
	var edges2 = new Array();
	var edges3 = new Array();
	var edges4 = new Array();
	var edges5 = new Array();
	array1Floor = [];
	array2Floor = [];
	array3Floor = [];
	array4Floor = [];
	array5Floor = [];
	var floorNodeListArray = ["","../test1/nodemaker/nodes/ke/1.txt", "../test1/nodemaker/nodes/ke/2.txt", "../test1/nodemaker/nodes/ke/3.txt", "../test1/nodemaker/nodes/ke/4.txt", "../test1/nodemaker/nodes/ke/5.txt"];
	var floorEdgeListArray = ["","../test1/nodemaker/edges/ke/1.txt", "../test1/nodemaker/edges/ke/2.txt", "../test1/nodemaker/edges/ke/3.txt", "../test1/nodemaker/edges/ke/4.txt", "../test1/nodemaker/edges/ke/5.txt"];
	
	this.loadNodes = function(){
		for(var n = 1; n < floorNodeListArray.length; n++){
			currentNodes = getOldArray(n);
			jQuery.ajax({
				async: false,
				url: floorNodeListArray[n],
				dataType: 'text',
				type: "GET",
				cache: false,
				success: function(data) {
			   		var newArray = data.split(",");
					for (var i = 0; i<=newArray.length; i+=5) {
						if(newArray.length == 0 || newArray[i] != undefined || newArray[i+1] != undefined){
							currentNodes[0][currentNodes[0].length] = new Node(newArray[i],newArray[i+2],newArray[i+3],newArray[i+4]);
							if(newArray[i+1] !== "gang"){
								rooms[rooms.length] = new roomNode(newArray[i+1], newArray[i]);
							}
						}
					}           
				}
			});
		}
		return [array1Floor,array2Floor,array3Floor,array4Floor,array5Floor, rooms];
	}
	
	this.loadEdges = function(){
		for(var n = 1; n < floorEdgeListArray.length; n++){
			currentEdges = getOldArray(n);
			jQuery.ajax({
				async: false,
				url: floorEdgeListArray[n],
				dataType: 'text',
				type: "GET",
				cache: false,
		  		success: function(data) {
		    		var newArray = data.split(",");
					for (var i = 0; i<=newArray.length-9; i+=9) {
						if((newArray[i] != undefined || newArray.length != 0) && currentEdges[0].checkId(newArray[i+1]) != -1 && currentEdges[0].checkId(newArray[i+4]) != -1){
							currentEdges[1][currentEdges[1].length] = new dualEdge(newArray[i],newArray[i+1],newArray[i+4],newArray[i+7],newArray[i+8]);
						}
					}
		  		}
			});
		}
		return [edges1,edges2,edges3,edges4,edges5];
	}	
	var getOldArray = function(floor){
		switch (floor) {
			case 1:
				return [array1Floor,edges1];
				break;
			case 2:
				return [array2Floor,edges2];
				break;
			case 3:
				return [array3Floor,edges3];
				break;
			case 4:
				return [array4Floor,edges4];
				break;
			case 5:
				return [array5Floor,edges5];
				break;	
		}
	}
};

function dualEdge(id, node1, node2, type, cost){
	this.id = id;
	this.node1 = node1;
	this.node2 = node2;
	this.type = type;
	this.cost = cost;
};

function roomNode(roomnr, nodeid){
	this.roomNumber = roomnr;
	this.nodeID = nodeid;
};