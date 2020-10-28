var denM = document.getElementById('denM');
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttributeNS(null, 'viewbox', '0 0 300 200');
svg.style.backgroundColor = "red";
denM.appendChild(svg);

function denMark(){
	var rectDen = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	rectDen.setAttributeNS(null, 'height', '30');
	rectDen.setAttributeNS(null, 'width', '300');
	rectDen.setAttributeNS(null, 'y', '60');
	rectDen.setAttributeNS(null, 'fill', 'white');
	svg.appendChild(rectDen);
	var rectDenm = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	rectDenm.setAttributeNS(null, 'height', '200');
	rectDenm.setAttributeNS(null, 'width', '30');
	rectDenm.setAttributeNS(null, 'x', '100');
	rectDenm.setAttributeNS(null, 'fill', 'white');
	svg.appendChild(rectDenm);
}
denMark();