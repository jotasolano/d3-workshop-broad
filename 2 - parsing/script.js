// ---- IMPORTING DATA USING D3 METHODS ----
//understanding d3.csv and the parse function
d3.csv('../data/data.csv', parseSet1, function(error, rows) { //will only run when data has been imported
	
});




 //create a function parseSet2 that handles missing values and removes "d-" from the Y dimension
 // d3.csv('../data/data-2.csv', parseSet2, function(error, rows) { //will only run when data has been imported
	
// });


//refactor the previous code using d3.queue


function parseSet1(d) {
	return {
		x: +d.x, //easy way to convert a string to a number
		y: +d.y,
		r: +d.r,
		avg: ( (+d.x) + (+d.y) ) / 2,
		max: d3.max([+d.x, +d.y])
	};
}