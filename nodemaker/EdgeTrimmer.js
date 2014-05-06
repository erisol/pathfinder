function TrimEdges(){
	Array.prototype.checkId = function(value){
		for(var indx = 0; indx < this.length; indx++){
			var testArray = this[indx].split(",");
			if(testArray[0] == value){
				return indx;
			}
		}
		return -1;
	}
	
	var tempedges1 = new Array();
	var tempedges2 = new Array();
	var tempedges3 = new Array();
	var tempedges4 = new Array();
	var tempedges5 = new Array();
	array1Floor = [];
	array2Floor = [];
	array3Floor = [];
	array4Floor = [];
	array5Floor = [];
	var floorNodeListArray = ["","../nodemaker/nodes/ke/1.txt", "../nodemaker/nodes/ke/2.txt", "../nodemaker/nodes/ke/3.txt", "../nodemaker/nodes/ke/4.txt", "../nodemaker/nodes/ke/5.txt"];
	var floorEdgeListArray = ["","../nodemaker/edges/ke/1.txt", "../nodemaker/edges/ke/2.txt", "../nodemaker/edges/ke/3.txt", "../nodemaker/edges/ke/4.txt", "../nodemaker/edges/ke/5.txt"];
	var floorFinalEdges = ["","../nodemaker/edges/final/ke/1.txt", "../nodemaker/edges/final/ke/2.txt", "../nodemaker/edges/final/ke/3.txt", "../nodemaker/edges/final/ke/4.txt", "../nodemaker/edges/final/ke/5.txt"];
	
	this.saveNewEdges = function(){
		for(var i = 1;  i< floorFinalEdges.length; i++){
			save = getOldArray(i);
			var file = String(floorFinalEdges[i]);
			var data = save[1];
			var xmlhttp;
			if(window.XMLHttpRequest) {
				xmlhttp=new XMLHttpRequest();
			}else {
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.open("POST","operations.php?data="+data+"&file="+file,true);
			xmlhttp.send();
		}

	}
	
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
							currentNodes[0][currentNodes[0].length] = currentNodes[0][currentNodes[0].length] = newArray[i]+","+newArray[i+1]+","+newArray[i+2]+","+newArray[i+3]+","+newArray[i+4];
						}
					}           
				}
			});
		}
	}
	
	this.loadEdges = function(){
		for(var n = 1; n < floorEdgeListArray.length; n++){
			currenttempedges = getOldArray(n);
			jQuery.ajax({
				async: false,
				url: floorEdgeListArray[n],
				dataType: 'text',
				type: "GET",
				cache: false,
		  		success: function(data) {
		    		var newArray = data.split(",");
					for (var i = 0; i<=newArray.length-9; i+=9) {
						if((newArray[i] != undefined || newArray.length != 0) && (newArray[i+7] != "gang" ||currenttempedges[0].checkId(newArray[i+1])) != -1 && currenttempedges[0].checkId(newArray[i+4]) != -1){
							currenttempedges[1][currenttempedges[1].length] = newArray[i]+","+findNodeId(newArray[i+1])+","+findNodeId(newArray[i+4])+","+newArray[i+7]+","+newArray[i+8];
						}
					}
		  		}
			});
		}
		return [tempedges1,tempedges2,tempedges3,tempedges4,tempedges5];
	}	
	var findNodeId = function(id){
		arrayNr = -1; pos = -1;
		for(var n = 1; n < floorEdgeListArray.length; n++){
			currenttempedges = getOldArray(n);
			tempid = currenttempedges[0].checkId(id);
			if(tempid != -1){
				arrayNr = n;
				pos = tempid;
				return [arrayNr, pos];
			}
		}
	return [arrayNr, pos];	
	}
	var getOldArray = function(floor){
		switch (floor) {
			case 1:
				return [array1Floor,tempedges1];
				break;
			case 2:
				return [array2Floor,tempedges2];
				break;
			case 3:
				return [array3Floor,tempedges3];
				break;
			case 4:
				return [array4Floor,tempedges4];
				break;
			case 5:
				return [array5Floor,tempedges5];
				break;	
		}
	}
};