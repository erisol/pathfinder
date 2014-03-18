


			// Global variables
			var selectedFloor = $('input[name="floors"]:checked').val();
			var floorListArray = ["","grids/ke/1.txt", "grids/ke/2.txt", "grids/ke/3.txt", "grids/ke/4.txt", "grids/ke/5.txt"];
			
			var nextGrid = 0;
			var gridArray = [];
	  		var gridArrayIndex = 0;
	
	  // Gets the mouse positioning of the canvas
      function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: parseInt(evt.clientX - rect.left),
          y: parseInt(evt.clientY - rect.top)
        };
      }
      var canvas = document.getElementById('makeGridCanvas');
      var context = canvas.getContext('2d');
	  
	  // Writes the coordinates to the menu bar on the left
	  function writeMessage(message) {
		  var messageCoords = document.getElementById("mouseCoords");
		  messageCoords.innerHTML = message;
	  }
	
	  // Eventlistener for mousepositioning on the canvas
      canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = mousePos.x + ',' + mousePos.y;
        writeMessage(message);
      }, false);
	  
	  // Create X grid to the document, calls moveXGrid() to make it interact with the mouse
	  function createXgrid() {
		  var getCanvas = document.getElementById("canvasFloat");
		  var newXgrid = document.createElement("div");
		  var gridId = String("canvasGrid"+nextGrid);
		  newXgrid.setAttribute("id", gridId);
		  newXgrid.style.height = "1px";
		  newXgrid.style.width = "2192px";
		  newXgrid.style.cssFloat ="left";
		  newXgrid.style.backgroundColor = "#FF0000";
		  newXgrid.style.left ="300";
		  newXgrid.style.top = "0";
		  newXgrid.style.position = "absolute";
		  getCanvas.appendChild(newXgrid);
		  moveXGrid();
	  }
	  
	  	  // When X grids are loaded, they will be added to the canvas
	  	  function createExistingXgrid(topVal) {
		  var getCanvas = document.getElementById("canvasFloat");
		  var newXgrid = document.createElement("div");
		  var gridId = String("canvasGrid"+nextGrid);
		  newXgrid.setAttribute("id", gridId);
		  newXgrid.style.height = "1px";
		  newXgrid.style.width = "2192px";
		  newXgrid.style.cssFloat ="left";
		  newXgrid.style.backgroundColor = "#FF0000";
		  newXgrid.style.left = "303px";
		  newXgrid.style.top = topVal+"px";
		  newXgrid.style.position = "absolute";
		  getCanvas.appendChild(newXgrid);
		  addXGrid();
		  nextGrid++;
	  }
	  
	  // Create Y grid to the document, calls moveYGrid() to make it interact with the mouse
	  function createYgrid() {
		  var getCanvas = document.getElementById("canvasFloat");
		  var newYgrid = document.createElement("div");
		  var gridId = String("canvasGrid"+nextGrid);
		  newYgrid.setAttribute("id", gridId);
		  newYgrid.style.height = "1091px";
		  newYgrid.style.width = "1px";
		  newYgrid.style.cssFloat ="left";
		  newYgrid.style.backgroundColor = "#FF0000";
		  newYgrid.style.left ="300";
		  newYgrid.style.top = "0";
		  newYgrid.style.position = "absolute";
		  getCanvas.appendChild(newYgrid);
		  moveYGrid();
	  }
	  
	  // When Y grids are loaded, they will be added to the canvas
	  function createExistingYgrid(leftVal) {
		  leftVal = parseInt(leftVal) + 303;
		  var getCanvas = document.getElementById("canvasFloat");
		  var newYgrid = document.createElement("div");
		  var gridId = String("canvasGrid"+nextGrid);
		  newYgrid.setAttribute("id", gridId);
		  newYgrid.style.height = "1091px";
		  newYgrid.style.width = "1px";
		  newYgrid.style.cssFloat ="left";
		  newYgrid.style.backgroundColor = "#FF0000";
		  newYgrid.style.position = "absolute";
		  newYgrid.style.left = leftVal+"px";
		  newYgrid.style.top = "0px";
		  getCanvas.appendChild(newYgrid);
		  addYGrid();
		  nextGrid++;
	  }
	  
	  // Moves the Y grid on the canvas for positioning. When you click, it snaps it to the canvas (visible)
	  function moveYGrid() {
		var yGrid = String("#canvasGrid"+nextGrid)
		var runningBoolean = true;
			$("#makeGridCanvas").mousemove(function(e){
				if (runningBoolean) {
				$mouseX = e.pageX;
				$mouseY = e.pageY; 
				$(yGrid).css({left:$mouseX});
				} else {
					return;
				}
		});
		$(yGrid).click(function() {
					addYGrid();
					runningBoolean = false;
				});
		
	  }
	  
	  
	  // Moves the X grid on the canvas for positioning. When you click, it snaps it to the canvas (visible)
	  function moveXGrid() {
		var xGrid = String("#canvasGrid"+nextGrid)
		var runningBoolean = true;
		
				$("#makeGridCanvas").mousemove(function(e){
					if (runningBoolean) {
					$mouseX = e.pageX;
					$mouseY = e.pageY; 
					$(xGrid).css({top:$mouseY});
					} else {
						return;
					}
				});
				$(xGrid).click(function() {
					addXGrid();
					runningBoolean = false;
				});
	  }
	  
	  //Store X value of the Y grid
	  function addYGrid() {
		  var xElementID = String("canvasGrid"+nextGrid);
		  var getXValue = document.getElementById(xElementID).offsetLeft;
		  getXValue -= 303;
		  var storeValue = String(getXValue+",0");
		  gridArray[gridArrayIndex] = storeValue;
		  addGridToList();
		  gridArrayIndex++;
		  nextGrid++;
	  }
	  
	  // Store Y value of the X grid
	  function addXGrid() {
		  var yElementID = String("canvasGrid"+nextGrid);
		  var getYValue = document.getElementById(yElementID).offsetTop;
		  var storeValue = String("0,"+getYValue);
		  gridArray[gridArrayIndex] = storeValue;
		  addGridToList();
		  gridArrayIndex++;
		  nextGrid++;
	  }
	  
	  // Adds grids to the list in the menu
	  function addGridToList() {
		  var parentElement = document.getElementById("createdGridsDisplay");
		  var itemElementID = String("canvasGridList"+nextGrid);
		  var itemElement = document.getElementById(itemElementID);
		  var itemDisplayText = String(gridArray[gridArrayIndex]);
   		  var newList= document.createElement("li");
    	  var newText = document.createTextNode(itemDisplayText);
		  newList.setAttribute("id", itemElementID);
    	  newList.appendChild(newText);
		  newList.innerHTML += " <a href='#' onclick='clearGrid("+nextGrid+")'>Remove this</a>";
   		  parentElement.appendChild(newList);
   		  console.log("element added to list succesfully");
	  }
	  
	  // Removes element N from the list in the menu
	  function removeGridFromList(n) {
		  removeItem = String("#canvasGridList"+n);
		  $(removeItem).remove();
		  console.log("successfully removed item "+n+" from the list");
		  gridArray.splice(n,1);
		}
		
		// Removes all grids from the list in the menu
		function removeGridsFromList() {
			for (var i = 0; i <= nextGrid; i++) {
		  removeItem = String("#canvasGridList"+i);
		  $(removeItem).remove();
			}
		  console.log("successfully all items from the list");
		  
		}
		
		
		// Stores all the grids in to the file of selected floor
		function saveGrids() {
				console.log(gridArray);
				writeGridToFile(gridArray);
		}
	  
            function writeGridToFile(data){
				
            var file = String(floorListArray[selectedFloor]);
            var xmlhttp;
            if(window.XMLHttpRequest) {
                xmlhttp=new XMLHttpRequest();
            } else {
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }

            xmlhttp.open("GET","gridOperations.php?data="+data+"&file="+file,true);
            xmlhttp.send();

			}
	  
	  // Clears grids from the canvas, removes the DOM element
	  function clearGrid(n) {
		  removeGrid = String("#canvasGrid"+n);
		  $(removeGrid).remove();
		  removeGridFromList(n);
		  console.log("successfully removed grid number"+n);
		  }
	  
	  // Clears all grids from the canvas, removes all DOM elements accociated to grids
	  function clearGrids() {
		  var removeGridId;
		  var removeGridElement;
		  var parentElement = document.getElementById("canvasFloat");
		  for (var i = 0; i <= nextGrid; i++) {
			  removeGrids = String("#canvasGrid"+i);
			  $(removeGrids).remove();
		  }
		  removeGridsFromList();
		  nextGrid = 0;
		  gridArray.splice(0,gridArray.length);
		  gridArrayIndex = 0;
		  console.log(gridArray);
		  console.log("successfully removed all grids");
	  }
	
	
	  // Loads the grids of the selected floor and adds them to the canvas during the iteration
	  function loadSelectedFloorGrid(n) {
		  
			jQuery.ajax({
			url: floorListArray[n],
			dataType: 'text',
			type: "GET",
			cache: false,
  			success: function(data) {
    			var newArray = data.split(",");
				for (var i = 0; i<=newArray.length; i+2) {
					if (newArray[i] == 0 && newArray[i+1] >= 0) {
						createExistingXgrid(newArray[i+1]);
						console.log("created 1 x grid: "+newArray[i+1]);
					} else if (newArray[i] >= 0 && newArray[i+1] == 0) {
						createExistingYgrid(newArray[i]);
						console.log("created 1 y grid: "+newArray[i]);
					} else {
						console.log("all grids were filled. no further grids were added");
					}
				}           
  			}
			});
	  }
		  
	
	  // Check the selected floor, change map and clear grid
	  function checkSelectedFloor() {
		var theCanvas = document.getElementById("makeGridCanvas");
		selectedFloor = parseInt($('input[name="floors"]:checked').val());
		switch (selectedFloor) {
			case 1:
				clearGrids();
				theCanvas.setAttribute("style", "background: url(../kart/kart_KE_1etg.jpg)");
				loadSelectedFloorGrid(selectedFloor);
				break;
			case 2:
				clearGrids();
				theCanvas.setAttribute("style", "background: url(../kart/kart_KE_2etg.jpg)");
				loadSelectedFloorGrid(selectedFloor);
				break;
			case 3:
				clearGrids();
				theCanvas.setAttribute("style", "background: url(../kart/kart_KE_3etg.jpg)");
				loadSelectedFloorGrid(selectedFloor);
				break;
			case 4:
				clearGrids();
				theCanvas.setAttribute("style", "background: url(../kart/kart_KE_4etg.jpg)");
				loadSelectedFloorGrid(selectedFloor);
				break;
			case 5:
				clearGrids();
				theCanvas.setAttribute("style", "background: url(../kart/kart_KE_5etg.jpg)");
				loadSelectedFloorGrid(selectedFloor);
				break;	
		}
		  
	  }
