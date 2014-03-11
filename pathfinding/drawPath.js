// JavaScript Document
function drawPath(startnode, goal){
	var c=document.getElementById("drawtestcanvas");
	var ctx=c.getContext("2d");
	ctx.lineTo(goal.getPrevNode().getCoords().getXCoord(), goal.getPrevNode().getCoords().getYCoord());
	if(startnode.id !== goal.getPrevNode().id){
		drawPath(startnode, goal.getPrevNode());
	}
	ctx.stroke();
}