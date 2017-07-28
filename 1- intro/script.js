var sine = [];
var cosine = [];
var tan = [];

// -- generating some data
for(var i=0; i<200; i++){
    var a = Math.random();
    sine.push({
        a:a,
        b:Math.sin(a*Math.PI*2)/2 +0.5,
        r:Math.random()
    });
}

for(var i=0; i<200; i++){
    var a = Math.random();
    cosine.push({
        a:a,
        b:Math.cos(a*Math.PI*2)/2 +0.5,
        r:Math.random()
    });
}

for(var i=0; i<300; i++){
    var a = Math.random();
    tan.push({
        a:a,
        b:Math.tan(-a*Math.PI*2)/2 +0.5,
        r:Math.random()
    });
}

console.table(sine);
// console.table(cosine);
// console.table(tan);

// --- Margin convention
var M = {top:50, right:50, bottom:50, left:50};
var outerWidth = document.getElementById('canvas').clientWidth,
    outerHeight = document.getElementById('canvas').clientHeight;

var w = outerWidth - M.left - M.right,
	h = outerHeight - M.top - M.bottom;

// --- appending svg to a div
var plot = d3.select('.canvas')
			.append('svg')
			.attr('width', outerWidth)
			.attr('height', outerHeight)
			.append('g')
		    .attr('transform','translate('+ M.left + ',' + M.top +')');

// --- appending svg:circle, giving attributes and styles
// sine.forEach(function(d) {
// 	plot.append('circle')
// 		.attr('r', d.r * 10)
// 		.attr('cx', d.a * w)
// 		.attr('cy', d.b * h)
// 		.style('fill','red')
//     .style('fill-opacity',0.8);

// });

// cosine.forEach(function(d) {
// 	plot.append('circle')
// 		.attr('r', d.r * 10)
// 		.attr('cx', d.a * w)
// 		.attr('cy', d.b * h)
// 		.style('fill','#00aa99')
//     .style('fill-opacity',0.8);

// });

// tan.forEach(function(d) {
//     plot.append('circle')
//         .attr('r', d.r * 10)
//         .attr('cx', d.a * w)
//         .attr('cy', d.b * h)
//         .style('fill','purple')
//     .style('fill-opacity',0.8);

// });