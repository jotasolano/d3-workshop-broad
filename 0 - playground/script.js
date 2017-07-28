// --- 1. select(), selectAll(), .attr() and .style()
//select only the first h1 tag and inject some text
// d3.select('.canvas-container')....

//select all h1 tags and inject some text
// d3.select('.canvas-container')....


// --- 2. Margin convention practice
var M = {top:50, right:50, bottom:50, left:50};
var outerWidth = document.getElementById('canvas').clientWidth,
    outerHeight = document.getElementById('canvas').clientHeight;

var w = outerWidth - M.left - M.right,
	h = outerHeight - M.top - M.bottom;

// --- appending svg to a div
// var plot = d3.select('.canvas')
// 			.append('svg')
// 			.attr('width', outerWidth)
// 			.attr('height', outerHeight)
// 			.append('g')
// 		    .attr('transform','translate('+ M.left + ',' + M.top +')');

// -- fill the entire #canvas with a blue background


//append a rectangle inside the margins

// append a circle and give it some color
//https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle
