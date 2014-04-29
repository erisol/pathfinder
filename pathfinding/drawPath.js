// parameterene: startnoden er den noden som algorithemen ble startet fra(drawpath avsluttes når goal har blitt endret til startnode), goal er den noden som er den siste i pathen som ikke er blitt tegnet path til fra sluttnoden(Tegner pathen baklengs, altså fra endNode-->startNode). 
//Denne funksjonen er rekursiv og kaller seg sjølv med samme startnode kver gang men endrer goal noden til den noden sin prevNode.
function Draw(){
	x = 0;
	this.drawPath = function(startnode, goal){
		if(goal.getPrevNode().id != goal.id){
		x1 = goal.getPrevNode().getCoords().getXCoord();
		y1 = goal.getPrevNode().getCoords().getYCoord();
		x2 = goal.getCoords().getXCoord();
		y2 = goal.getCoords().getYCoord();
		var drawInfo = finddegrees(x1,y1,x2,y2);
		drawLine(x1,y1,x2,y2,x,drawInfo);
		drawNodes(x2,y2,x);
		if(startnode.id !== goal.getPrevNode().id){
			x++;
			this.drawPath(startnode, goal.getPrevNode());
		}
		x = 0;
		}
	}
	var drawNodes = function(x, y, oldId){
		x = parseInt(x)+ +1;
		y = parseInt(y)+ +2;		
		var getCanvas = document.getElementById("canvas");
		var node = document.createElement("div");
		var nodeId = String("dNode"+oldId);
		node.setAttribute("id", nodeId);
		node.style.height = "2px";
		node.style.width = "2px";
		node.style.backgroundColor = "green";
		node.style.cssFloat ="left";
		node.style.left = (parseInt(x))+"px";
		node.style.top = parseInt(y)+"px";
		node.style.position = "absolute";
		node.style.display = "visible";
		getCanvas.appendChild(node);
	}
	
	var drawLine = function(x1, y1, x2, y2, id,info){
		x1 = parseInt(x1)+ +2;
		x2 = parseInt(x2)+ +2;
		y1 = parseInt(y1)+ +2;
		y2 = parseInt(y2)+ +2;
		var drawinfo = info;
		var degree = Math.round(drawinfo[0]);
		var getCanvas = document.getElementById("canvas");
		var node = document.createElement("div");
		var nodeId = id;
		width = parseInt(Math.round(Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))));
		node.setAttribute("id", "line"+id);
		node.style.backgroundColor = "green";
		node.style.height = "2px";
		node.style.width = width+"px";
		node.style.top = Math.round(y1)+"px";
		node.style.position = "absolute";
		node.style.display = "visible";
		node.style.left = parseInt(x1)+"px";
		var x = -Math.round(width/2 - Math.sqrt(Math.pow((width/2),2) - Math.pow(((y2-y1)/2),2))+drawinfo[1]);
		var y = Math.round(drawinfo[2]*Math.sin((Math.PI/180)*degree));
		node.style.webkitTransform = "translateY("+y+"px) translateX("+x+"px) rotate("+degree+"deg)";
		node.style.msTransform = "translateY("+y+"px) translateX("+x+"px) rotate("+degree+"deg)"; /* IE 9 */
		node.style.transform = "translateY("+y+"px) translateX("+x+"px) rotate("+degree+"deg)"; /* Standard syntax */
		getCanvas.appendChild(node);
	}
	
	var finddegrees = function(x1,y1,x2,y2){
		x1 = parseInt(x1);
		x2 = parseInt(x2);
		y1= -parseInt(y1);
		y2= -parseInt(y2);
		if(x1 < x2 && y1 < y2){
			return [-(Math.atan(((y2-y1)/(x2-x1))))*(180/Math.PI),0,0.5*Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))];
		}
		
		else if(x1 < x2 && y1 > y2){
			return [(Math.atan(((y1-y2)/(x2-x1))))*(180/Math.PI),0,0.5*Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y1-y2,2))];
		}
		
		else if(x1 > x2 && y1 < y2){
			return [-180+(Math.atan(((y2-y1)/(x1-x2))))*(180/Math.PI),(x1-x2),0.5*Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y2-y1,2))];
		}
		
		else if(x1 > x2 && y1 > y2){
			return [180-(Math.atan(((y1-y2)/(x1-x2))))*(180/Math.PI),(x1-x2),0.5*Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y2-y1,2))];
		}
		
		else if(x1===x2){
			if(y1 < y2){
				return [-90,0, (y2-y1)/2];	
			}
			
			else if(y1 > y2){
				return [90,0,(y1-y2)/2];
			}
			
		}
		
		else if(y1===y2){
			if(x1 < x2){
				return [0,0,0];
			}
			
			else if(x1 > x2){
				return [0,(x1-x2),0];
			}
		}
		return [0,0,0];
	}
}