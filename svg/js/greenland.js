var targetDiv = document.getElementById('svgTarg');
var svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgNode.setAttributeNS(null, 'viewbox', '0 0 300 200');
svgNode.setAttributeNS(null, 'height', '200');
svgNode.setAttributeNS(null, 'width', '300');
targetDiv.appendChild(svgNode);

function rect(){
	var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	rect.setAttributeNS(null, 'height', '100');
	rect.setAttributeNS(null, 'width', '180');
	rect.setAttributeNS(null, 'fill', 'red');
	svgNode.appendChild(rect);
	var rect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	rect2.setAttributeNS(null, 'height', '50');
	rect2.setAttributeNS(null, 'width', '180');
	rect2.setAttributeNS(null, 'fill', 'white');
	svgNode.appendChild(rect2);
	
	}
	rect();

function circle(){
var circleNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
circleNode.setAttributeNS(null, 'd', 'M35,50 a1,1 0 0,1 70,0');
circleNode.setAttributeNS(null, 'fill', 'red');
svgNode.appendChild(circleNode);
var circle = document.createElementNS('http://www.w3.org/2000/svg', 'path');
circle.setAttributeNS(null, 'd', 'M35,50 a1,1 0 0,0 70,0');
circle.setAttributeNS(null, 'fill', 'white');
svgNode.appendChild(circle);
}
circle();





















