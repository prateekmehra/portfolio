var makes_to_filter = [];


d3.csv('/virtual-auto-expo/data/vehicles_data_processed.csv', function(data) {

	var makes = data
				.map(data => data.make)
  				.filter((value, index, self) => self.indexOf(value) === index);

	var makesDropDown = d3.select("#makeMultiSelect ul");
	
	makesDropDown
		.selectAll("li")
        .data(makes)
        .enter()
        .append("li")
        .append("input")
        .on('click', function() {
		var title = $(this).val(),
			value = $(this).val() + " ";

		if ($(this).is(':checked')) {
			var html = '<span class="selectedMakes" title="' + title + '">' + value + '</span>';
			$('#makeMultiSel').append(html).hide();
			$("#makeHida").show();
		} else {
			$('span[title="' + title + '"]').remove();
			var ret = $("#makeHida");
			$('#makeMenu.dropdown dt a ').append(ret);
		}
		})
        .attr("type", "checkbox")
        .attr("value", function(d){
            return d;
        });

    makesDropDown
    	.selectAll("li")
        .append('label')
        .text(function(d){
            return d;
        });
    });

function getMakesToFilter(){
		filters["make"]= [];
	 	$(".selectedMakes").map(function(){
	 		filters["make"].push($(this).text().trim());
	 	});

	 	if(filters["make"].length == 0){
	 		delete filters["make"];
	 	}
    }