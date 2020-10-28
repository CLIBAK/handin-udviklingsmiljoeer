var usa = document.getElementById('usa');
var svgUS = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgUS.setAttributeNS(null, 'viewbox', '0 0 300 200');
svgUS.setAttributeNS(null, 'height', '200');
svgUS.style.backgroundColor = "red";
usa.appendChild(svgUS);
var x = 16.5;
var ax = 11.25;
	var bx = 7.5;
	var cx = 16.85;
	var dx = 5.6;
	var ex = 15;
	var ay = 2.6;
	var by = 13.25;
	var cy = 5.75;
	var dy = 5.75;
	var ey = 13.25;
	var bax = 23.25;
	var bbx = 19.5;
	var bcx = 28.85;
	var bdx = 17.85;
	var bex = 27;
	var bay = 14.6;
	var bby = 25.25;
	var bcy = 17.25;
	var bdy = 17.75;
	var bey = 25.25;

var b = [[bax,bay], [bbx,bby], [bcx,bcy], [bdx,bdy], [bex,bey]];

	var a = [[ax,ay], [bx,by], [cx,cy], [dx,dy], [ex,ey]];
function usaSV(){
	for(var i = 0; i<6; i++){
		var rectUS = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
			rectUS.setAttributeNS(null, 'height', '16.5');
			rectUS.setAttributeNS(null, 'width', '300');
			rectUS.setAttributeNS(null, 'fill', 'white');
			rectUS.setAttributeNS(null, 'y', x);
			svgUS.appendChild(rectUS);
			x = x + 30.5
	} 
	var rectUS = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	rectUS.setAttributeNS(null, 'height', '108');
	rectUS.setAttributeNS(null, 'width', '148');
	rectUS.setAttributeNS(null, 'fill', 'blue');
	svgUS.appendChild(rectUS);
	
	for(var i = 0; i<5; i++){
	st6()
	a = [[ax = 11.25 ,ay = ay +23], [bx = 7.5 ,by = by + 23], [cx = 16.8 ,cy = cy +23], [dx = 5.6 ,dy = dy +23], [ex = 15 ,ey = ey +23]];
}

for(var i = 0; i<4; i++){
	sta5()
	b = [[bax = 23.25 ,bay = bay +23], [bbx = 19.5 ,bby = bby + 23], [bcx = 28.85 ,bcy = bcy +23], [bdx = 17.85 ,bdy = bdy +23], [bex = 27 ,bey = bey +23]]; 
}

}
usaSV()
function st6(){
	for(var i = 0; i<6; i++){
		var rectUS2 = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
		rectUS2.setAttributeNS(null, 'points', a);
		rectUS2.setAttributeNS(null, 'fill', 'white');
		svgUS.appendChild(rectUS2);
		a = [[ax = ax + 25 ,ay], [bx = bx + 25,by], [cx = cx + 25,cy], [dx = dx + 25,dy], [ex = ex + 25,ey]];
		}
	}
function sta5(){
	for(var i = 0; i<5; i++){
		var rectUS2 = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
		rectUS2.setAttributeNS(null, 'points', b);
		rectUS2.setAttributeNS(null, 'fill', 'white');
		svgUS.appendChild(rectUS2);
		b = [[bax = bax + 25 ,bay], [bbx = bbx + 25,bby], [bcx = bcx + 25,bcy], [bdx = bdx + 25,bdy], [bex = bex + 25,bey]];
		
		}
	}