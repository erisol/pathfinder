function Load(){
	Array.prototype.checkId = function(value){
		for(var indx = 0; indx < this.length; indx++){
			var testArray = this[indx].id;
			if(testArray == value){
				return indx;
			}
		}
		return -1;
	}
	
	var rooms = new Array();
	var edges = new Array();
	array1Floor = new Array();
	array2Floor = new Array();
	array3Floor = new Array();
	array4Floor = new Array();
	array5Floor = new Array();
	var floorNodeListArray = ["","../test1/nodemaker/nodes/ke/1.txt", "../test1/nodemaker/nodes/ke/2.txt", "../test1/nodemaker/nodes/ke/3.txt", "../test1/nodemaker/nodes/ke/4.txt", "../test1/nodemaker/nodes/ke/5.txt"];
	var floorEdgeListArray = ["","../test1/nodemaker/edges/final/ke/1.txt", "../test1/nodemaker/edges/final/ke/2.txt", "../test1/nodemaker/edges/final/ke/3.txt", "../test1/nodemaker/edges/final/ke/4.txt", "../test1/nodemaker/edges/final/ke/5.txt"];
	
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
							currentNodes[currentNodes.length] = new Node(newArray[i],newArray[i+2],newArray[i+3],newArray[i+4]);
							if(newArray[i+1] !== "gang"){
								rooms[rooms.length] = new roomNode(newArray[i+1], newArray[i], newArray[i+4],i/5);
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
					for (var i = 0; i<=newArray.length-7; i+=7) {
						if((newArray[i] != undefined || newArray.length != 0)){
							edges[edges.length] = new dualEdge(newArray[i],newArray[i+2],newArray[i+1],newArray[i+4],newArray[i+3],newArray[i+5],newArray[i+6]);
						}
					}
		  		}
			});
		}
		return edges;
	}	
	var getOldArray = function(floor){
		switch (floor) {
			case 1:
				return array1Floor;
				break;
			case 2:
				return array2Floor;
				break;
			case 3:
				return array3Floor;
				break;
			case 4:
				return array4Floor;
				break;
			case 5:
				return array5Floor;
				break;	
		}
	}
	
	this.getRooms = function(){
		var loaded = this.loadRooms();
		var rooms = new Array();
		var info = new Array();
		var loaded = loaded.split("||");
		for(var idx = 0; idx < loaded.length; idx++){
			var rest = loaded[idx].split(",");
			info[info.length] = rooms.length;
			for(var indx = 0; indx < rest.length; indx++){
				rooms[rooms.length] = rest[indx];
			}
		}
		return [rooms, info];
	}
	
	this.loadRooms = function() {
		var rooms;
		jQuery.ajax({
			async: false,
			url: "rooms.txt",
			dataType: 'text',
			type: "GET",
			cache: false,
	  		success: function(data) {
				rooms = data;
			}
		});
		return rooms;
	}
	this.addRooms = function(){
		var current = 0;
		var optgroupFrom;
		var optgroupTo;
		var listOfRoomInfo = this.getRooms();
		var fromRoom = document.getElementById("fromRoom");
		var toRoom = document.getElementById("toRoom");
		for(var indx = 0; indx < listOfRoomInfo[0].length; indx++){
			if(indx == listOfRoomInfo[1][current]){
				var groupFrom = document.createElement('optgroup');
				var groupTo = document.createElement('optgroup');
				groupFrom.label = listOfRoomInfo[0][indx];
				groupFrom.id = "from"+listOfRoomInfo[0][indx];
				groupTo.label = listOfRoomInfo[0][indx];
				groupTo.id = "to"+listOfRoomInfo[0][indx];
				fromRoom.appendChild(groupFrom);
				toRoom.appendChild(groupTo);
				current++;
				optgroupFrom = document.getElementById("from"+listOfRoomInfo[0][indx]);
				optgroupTo = document.getElementById("to"+listOfRoomInfo[0][indx]);
			}else{
				var newroomFrom = document.createElement('option');
				var newroomTo = document.createElement('option');
				newroomFrom.value = listOfRoomInfo[0][indx];
				newroomFrom.innerHTML = listOfRoomInfo[0][indx];
				newroomTo.value = listOfRoomInfo[0][indx];
				newroomTo.innerHTML = listOfRoomInfo[0][indx];
				optgroupTo.appendChild(newroomFrom);
				optgroupFrom.appendChild(newroomTo);
			}
		}
	}

};

function dualEdge(id, node1, floor1, node2, floor2, type, cost){
	this.id = id;
	this.node1 = node1;
	this.floor1 = floor1;
	this.node2 = node2;
	this.floor2 = floor2;
	this.type = type;
	this.cost = Math.ceil(cost/10);
};

function roomNode(roomNr, nodeId, fArray,pos){
	this.roomNumber = roomNr;
	this.nodeId = nodeId;
	this.floorArray = fArray;
	this.pos = pos;
};