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

	var cleanData = rows.filter(function(d) { return d.copies != undefined });

	var astData = cleanData.filter(function(d) { return d.ast > 0 && d.ast < 600 && d.creatinine < 400; })

	// data bounds
	var minCopies = d3.min(astData, function(d) { return d.copies; });
	var maxCopies = d3.max(astData, function(d) { return d.copies; });

	var creatExtent = d3.extent(astData, function(d) { return d.creatinine; });
	var astExtent = d3.extent(astData, function(d) { return d.ast; });


	// scales and axes generators
	var scaleX = d3.scaleLinear()
		.domain(creatExtent)
		.range([0, w]);

	var scaleY = d3.scaleLinear()
		.domain(astExtent)
		.range([h, 0]);

	var scaleR = d3.scaleLinear()
		.domain([minCopies, maxCopies])
		.range([5, 15])

	var xAxis = d3.axisBottom(scaleX);
	var yAxis = d3.axisLeft(scaleY);


	// Drawing!
	// Append the X and Y axes
	plot.append('g').call(xAxis)
		.attr('transform', 'translate(' + 0 + ',' + h + ')')

	plot.append('g').call(yAxis)


	// // A scatter plot
	plot.selectAll("circle").data(astData).enter()
		.append('circle')
		.attr('cx', function(d) { return scaleX(d.creatinine); })
		.attr('cy', function(d) { return scaleY(d.ast); })
		.attr('r', function(d) { return scaleR(d.copies); })
	  .style('fill', function(d) {
	  	if (d.outcome === 'Died') return 'red'
	  		else return '#00aa99'
	  })
	  .style('fill-opacity', 0.6)
	  .on('click', function(d) { console.log(d) });

}); //end of await



//Write parse function
function parse(d) {
	return {
		id: d['Patient ID'],
		diagnosis: d.Diagnosis?d.Diagnosis:undefined,
		age: +d.Age?+d.Age:undefined,
		outcome: d.Outcome,
		creatinine: +d['Creatinine [umol/L] day 1'],
		ast: +d['Aspartate Aminotransferase [U/L] day 1'],
		copies: +d['EBOV copies/mL plasma (log units) day 1']?+d['EBOV copies/mL plasma (log units) day 1']:undefined
	};
}