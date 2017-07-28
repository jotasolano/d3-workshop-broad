//First, append <svg> and <g> elements and implement the margin convention
var m = {t:50,r:50,b:50,l:50},
    w = document.getElementById('canvas').clientWidth - m.l - m.r,
    h = document.getElementById('canvas').clientHeight - m.t - m.b;

var plot = d3.select('.canvas').append('svg')
    .attr('width',w+ m.l+ m.r)
    .attr('height',h+ m.t+ m.b)
    .append('g')
    .attr('transform','translate('+ m.l+','+ m.t+')');

d3.queue()
	.defer(d3.csv, '../data/ebola-data.csv', parse)
	.await(function(error, rows) {

	console.table(rows);

	//array = cleanData with only rows that have a value for EBOV copies


	// data bounds try d3.min, d3.max and d3.extent


	// scales generators for X(creatinine) and Y(ast)


	//axes



	// Drawing!
	// Append the X and Y axes


	// // A scatter plot
	// plot.selectAll("circle").data(cleanData).enter() //how is this possible? there are no circles!


}); //end of await



//Write parse function. Convert to numbers and control for missing data!
/*
id | diagnosis | age | outcome | creatinine | ast | copies

*/
function parse(d) {
	return {
	};
}