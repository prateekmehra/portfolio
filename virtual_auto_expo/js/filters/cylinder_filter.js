var cylinders_to_filter = [];


d3.csv('../data/vehicles_data_processed.csv', function(data) {

	var cylinders = data
				.map(data => data.cylinders)
  				.filter((value, index, self) => self.indexOf(value) === index);

	var cylindersDropDown = d3.select("#cylinderMultiSelect ul");
	
	cylindersDropDown
		.selectAll("li")
        .data(cylinders)
        .enter()
        .append("li")
        .append("input")
        .on('click', function() {
		var title = $(this).val(),
			value = $(this).val() + " ";

		if ($(this).is(':checked')) {
			var html = '<span class="selectedCylinders" title="' + title + '">' + value + '</span>';
			$('#cylinderMultiSel').append(html).hide();
			$("#cylinderHida").show();
		} else {
			$('span[title="' + title + '"]').remove();
			var ret = $("#cylinderHida");
			$('#cylinderMenu.dropdown dt a ').append(ret);
		}
		})
        .attr("type", "checkbox")
        .attr("value", function(d){
            return d;
        });

    cylindersDropDown
    	.selectAll("li")
        .append('label')
        .text(function(d){	
            return d;
        });
    });

function getCylindersToFilter(){
		filters["cylinders"]= [];
	 	$(".selectedCylinders").map(function(){
	 		filters["cylinders"].push($(this).text().replace(' ', ''));
	 	});

	 	if(filters["cylinders"].length == 0){
	 		delete filters["cylinders"];
	 	}
    }