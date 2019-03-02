var vclasses_to_filter = [];


d3.csv('/vae/data/vehicles_data_processed.csv', function(data) {

	var vclasses = data
				.map(data => data.vehicle_class)
  				.filter((value, index, self) => self.indexOf(value) === index);

	var vclassesDropDown = d3.select("#vclassMultiSelect ul");
	
	vclassesDropDown
		.selectAll("li")
        .data(vclasses)
        .enter()
        .append("li")
        .append("input")
        .on('click', function() {
		var title = $(this).val(),
			value = $(this).val() + " ";

		if ($(this).is(':checked')) {
			var html = '<span class="selectedVclasses" title="' + title + '">' + value + '</span>';
			$('#vclassMultiSel').append(html).hide();
			$("#vclassHida").show();
		} else {
			$('span[title="' + title + '"]').remove();
			var ret = $("#vclassHida");
			$('#vclassMenu.dropdown dt a ').append(ret);
		}
		})
        .attr("type", "checkbox")
        .attr("value", function(d){
            return d;
        });

    vclassesDropDown
    	.selectAll("li")
        .append('label')
        .text(function(d){
            return d;
        });
    });

function getVclassesToFilter(){
		filters["vehicle_class"]= [];
	 	$(".selectedVclasses").map(function(){
	 		filters["vehicle_class"].push($(this).text().trim());
	 	});

	 	if(filters["vehicle_class"].length == 0){
	 		delete filters["vehicle_class"];
	 	}
    }