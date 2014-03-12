// parameterene: startnoden er den noden som algorithemen ble startet fra(drawpath avsluttes når goal har blitt endret til startnode), goal er den noden som er den siste i pathen som ikke er blitt tegnet path til fra sluttnoden(Tegner pathen baklengs, altså fra endNode-->startNode). Denne funksjonen er rekursiv og kaller seg sjølv med samme startnode kver gang men endrer goal noden til den noden sin prevNode.
function drawPath(startnode, goal){
	var c=document.getElementById("drawtestcanvas");
	var ctx=c.getContext("2d");
	ctx.lineTo(goal.getPrevNode().getCoords().getXCoord(), goal.getPrevNode().getCoords().getYCoord());
	if(startnode.id !== goal.getPrevNode().id){
		drawPath(startnode, goal.getPrevNode());
	}
	ctx.stroke();
}