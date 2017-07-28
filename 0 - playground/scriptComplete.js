// --- 1. select(), selectAll(), .attr() and .style()
//select only the first h1 tag and inject some text
d3.select('.canvas-container').select('h1').html('hello world')

//select all h1 tags and inject some text
d3.select('.canvas-container').selectAll('h1').html(function(d, i) { return ('hello world ' + i); })


// --- 2. Margin convention practice
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

// -- fill the entire #canvas with a blue background
d3.select('#canvas')
	.style('background-color', 'blue');

//append a rectangle inside the margins
plot.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', w)
    .attr('height', h)
    .style('fill', '#000');


// append a circle and give it some color
//https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle
plot.append('circle')
  .attr('cx', 0)
  .attr('cy', 0)
  .attr('r', 50)
  .style('fill', 'red');
