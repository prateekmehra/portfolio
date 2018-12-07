var transmissions_to_filter = [];


d3.csv('../data/vehicles_data_processed.csv', function(data) {

	var transmissions = data
				.map(data => data.transmission)
  				.filter((value, index, self) => self.indexOf(value) === index);

	var transmissionsDropDown = d3.select("#transmissionMultiSelect ul");
	
	transmissionsDropDown
		.selectAll("li")
        .data(transmissions)
        .enter()
        .append("li")
        .append("input")
        .on('click', function() {
		var title = $(this).val(),
			value = $(this).val() + " ";

		if ($(this).is(':checked')) {
			var html = '<span class="selectedTransmissions" title="' + title + '">' + value + '</span>';
			$('#transmissionMultiSel').append(html).hide();
			$("#transmissionHida").show();
		} else {
			$('span[title="' + title + '"]').remove();
			var ret = $("#transmissionHida");
			$('#transmissionMenu.dropdown dt a ').append(ret);
		}
		})
        .attr("type", "checkbox")
        .attr("value", function(d){
            return d;
        });

    transmissionsDropDown
    	.selectAll("li")
        .append('label')
        .text(function(d){
            return d;
        });
    });

function getTransmissionsToFilter(){
		filters["transmission"]= [];
	 	$(".selectedTransmissions").map(function(){
	 		filters["transmission"].push($(this).text().trim());
	 	});

	 	if(filters["transmission"].length == 0){
	 		delete filters["transmission"];
	 	}
    }