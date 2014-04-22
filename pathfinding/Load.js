function load(){
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
	var floorNodeListArray = ["","nodes/ke/1.txt", "nodes/ke/2.txt", "nodes/ke/3.txt", "nodes/ke/4.txt", "nodes/ke/5.txt"];
	var floorEdgeListArray = ["","edges/ke/1.txt", "edges/ke/2.txt", "edges/ke/3.txt", "edges/ke/4.txt", "edges/ke/5.txt"];
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
						if(newArray[i] != undefined){
							currentNodes[0][currentNodes[0].length] = newArray[i]+","+newArray[i+1]+","+newArray[i+2]+","+newArray[i+3]+","+newArray[i+4];
							rooms[rooms.length] = new roomnode(newArray[i+1], newArray[i]); 
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
							currentEdges[1][currentEdges[1].length] = newArray[i]+","+newArray[i+1]+","+newArray[i+4]+","+newArray[i+7]+","+newArray[i+8];
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

function roomnode(roomnr, nodeid){
	this.roomnr = roomnr;
	this.nodeid = nodeid;
};