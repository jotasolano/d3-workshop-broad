// ---- IMPORTING DATA USING D3 METHODS ----
//understanding d3.csv and the parse function
d3.csv('../data/data.csv', parseSet1, function(error, rows) { //will only run when data has been imported
	console.log(rows);
});


function parseSet1(d) {
	return {
		x: +d.x, //easy way to convert a string to a number
		y: +d.y,
		r: +d.r,
		avg: ( (+d.x) + (+d.y) ) / 2,
		max: d3.max([+d.x, +d.y])
	};
}


d3.csv('../data/data-2.csv', parseSet2, function(error, rows) { //will only run when data has been imported
	console.table(rows);
});


function parseSet2(d) {
	return {
		x: (+d.x)?(+d.x):undefined, //ternary statement
		y: +(d.y.slice(2))

	};
}


//refactor the previous code using d3.queue
d3.queue()
	.defer(d3.csv, '../data/data.csv', parseSet1)
	.defer(d3.csv, '../data/data-2.csv', parseSet2)
	.await(function(error, set1, set2){
		if (error) throw error;

		console.log(set1.length, set2.length)
	})


function parseSet1(d) {
	return {
		x: +d.x, //easy way to convert a string to a number
		y: +d.y,
		r: +d.r,
		avg: ( (+d.x) + (+d.y) ) / 2,
		max: d3.max([+d.x, +d.y])
	};
}


function parseSet2(d) {
	return {
		x: (+d.x)?(+d.x):undefined, //ternary statement
		y: +(d.y.slice(2))

	};
}