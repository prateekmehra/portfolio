var filters = {};	
var filtered_data;

d3.csv('/virtual-auto-expo/vehicles_data_processed.csv', function(data) {

	d3.select(".filter")
	.on("click", function() {
		filters = {};
		getMakesToFilter();
		getTransmissionsToFilter();
		getVclassesToFilter();
		getCylindersToFilter();

		var new_data = filter_data();

		if (!_.isEmpty(filters)){
			callUpdate(new_data);
		}
	});

	function filter_data(){
		return data.filter(
			function(d){
				var should_include = Object.keys(filters).map(function(key){	
					return filters[key].indexOf(d[key]) > -1;
				});
				return should_include.indexOf(false) == -1;
		});
	}

});