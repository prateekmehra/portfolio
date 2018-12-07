var graph;
var dataset;
var nest;
var _temp;

var labelMap = {'make': 'Make','model' : 'Model','year': 'Year','mpg_combined': 'MPG Combined','emission_rating': 'Emission Rating','engine_hp': 'Engine HP','price': 'Price*', 'vehicle_class' : 'Class', 'cylinders': 'Cylinders', 'transmission_details': 'Transmission','mpg_city': 'MPG(City)','mpg_highway':'MPG(Highway)', 'engine_displ':'Engine Disp.', 'fuel_type': 'Fuel Type'}

d3.csv('../data/vehicles_data_processed.csv', function(data) {
	dataset = data;
	
	var parcoords_data = data.map(function(value) {
		var segmented_data = slice (value, ['make','model','year','mpg_combined','emission_rating','engine_hp','price']);
	  	return segmented_data;
	});


	var grid_data = []; 

	graph = d3.parcoords()('#wrapper')
						.data(parcoords_data)
						.alpha(0.4)
						.mode("queue")
						.rate(5)
						.render()
						.interactive()
						.brushable()

						
	change_color("mpg_combined");

	graph.svg
			.selectAll(".dimension")
			.on("click", change_color);


	var grid = d3.divgrid();
	d3.select("#grid")
		.datum(grid_data)
		.call(grid)
		.selectAll(".row");

	graph.on("brush", function(d) {
		convert2RadarData(d);	
		grid_data = get_grid_data(d);
		
		setTimeout(function() { 
			d3.select("#grid")
				.datum(grid_data)
				.call(grid)
				.selectAll(".row")
				.on({
					"mouseover": function(d) {
					 	graph.highlight([d]);
					 	$(getRadarLegend(d)).trigger('mouseover');
					},
					"mouseout": graph.unhighlight
				}), 500 });

	});

	// Remove all but selected from the dataset
	d3.select(".keep-data")
		.on("click", function() {
			new_data = graph.brushed();
			if (new_data.length == 0) {
				alert("Please do not select all the data when keeping/excluding");
				return false;
			}
			callUpdate(new_data);
		});

	// Exclude selected from the dataset
	d3.select(".exclude-data")
		.on("click", function() {
			new_data = _.difference(dataset, graph.brushed());
			if (new_data.length == 0) {
				alert("Please do not select all the data when keeping/excluding");
				return false;
			}
			callUpdate(new_data);
		});
		
	
	d3.select(".reset-data")
		 .on("click", function() {
		 	resetFilters();
			callUpdate(dataset);
		 });

	function get_grid_data(d){
		_temp = [];
		if (d.length == data.length){
			return [];
		}

		var temp = data.map(function(value) {
			return slice (value, ['make','model','year','mpg_combined','emission_rating','engine_hp','price', 'vehicle_class', 'cylinders', 'transmission_details','mpg_city','mpg_highway', 'engine_displ', 'fuel_type']);
		});

		_temp = temp.filter(function(t){
				var bool_arr = d.map(function(obj){
					if (t.make == obj.make && t.model == obj.model && t.year == obj.year){
						return true;
					}
					else {
						return false;
					}
				});

				if (bool_arr.indexOf(true) > -1){
					return true;
				}
				else{
					return false;
				}
			});
		return _temp;
		}

	});

var color_scale = d3.scale.linear()
					.domain([-2, -1, -0.5, 0, 0.5, 1, 2])
					.range(["#c7292b", "#DE5E60", "#FFFF00","#FFFF00", "#7FFF00", "#98df8a", "#63cf4e"])
					.interpolate(d3.interpolateLab);


function slice(object, keys) {
    return Object.keys(object)
        .filter(function (key) {
            return keys.indexOf(key) >= 0;
        })
        .reduce(function (acc, key) {
            acc[key] = object[key];
            return acc;
        }, {});
}



function change_color(dimension) {
	graph.svg.selectAll(".dimension")
		.style("font-weight", "normal")
		.filter(function(d) { return d == dimension; })
		.style("font-weight", "bold")

	graph.color(zcolor(graph.data(),dimension)).render()
}

function zcolor(col, dimension) {
	var z = zscore(_(col).pluck(dimension).map(parseFloat));
	return function(d) { return color_scale(z(d[dimension]))}
};

function zscore(col) {
	var n = col.length,
	mean = _(col).mean(),
	sigma = _(col).stdDeviation();

	return function(d) {
		return (d-mean)/sigma;
	};
};

function callUpdate(data) {
	graph.data(data).brush().render().updateAxes();	
	convert2RadarData(data);	 
}

function getRadarLegend(d){
	return "#L-" + d.make.split(/[^A-Za-z0-9]/g).join('-') + "-" + d.model.split(/[^A-Za-z0-9]/g).join('-') + "-" + d.year.split(/[^A-Za-z0-9]/g).join('-');
}

function getLabel(str){
	return labelMap[str];
}