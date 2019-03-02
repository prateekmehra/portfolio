
	var operation = d3.select('body').append('div').append('h2');
	var axis = ['mpg_combined','emission_rating','engine_hp'];
	var _d;
	var data = [];

	function convert2RadarData(raw_data) {
		data = [];
		raw_data.forEach(function(d){
			var temp_values = [];
			var temp_dict = {"key": d['make'].concat(' ', d['model'],' ', d['year'])};

			Object.keys(d).forEach (function(k) {

				if (axis.indexOf(k) > -1){
					temp_values.push({
						"axis": k,
						"value": parseFloat(d[k])		
					});
				}
				else if (!isNaN(d[k])){
					temp_dict[k] = parseFloat(d[k]);
				}
				else{
					temp_dict[k] = d[k];	
				}
			});
			temp_dict["values"] = temp_values;
			data.push(temp_dict);
		});

		setTimeout(function() { 
			if(data.length < 20 && data.length > 0){
				radarChart.data(data).duration(500).update();
				$('.floating').hide();
			}
			else{
				radarChart.data([]).duration(500).update();
				$('.floating').show();
			}
		},500);
		

		

		

	}

// !function() {

		 // setTimeout(function() { 
		// 	operation.html(" radarChart.options({'legend': {display: true}}); <br> radarChart.colors({'iPhone': 'blue', 'Samsung': 'red', 'Nokia Smartphone': 'yellow'}).update(); ");
		// 	radarChart.options({'legend': {display: true}});
		// 	radarChart.colors({'iPhone': 'blue', 'Samsung': 'red', 'Nokia Smartphone': 'yellow'}).update();
	 // }, 4000);
	 
	 // setTimeout(function() { 
		// 	operation.html(" radarChart.filterAxes(7); <br> radarChart.options({circles: {maxValue: 1, levels: 4}}).update(); ");
		// 	radarChart.filterAxes(7);
		// 	radarChart.options({circles: {maxValue: 1, levels: 4}}).update();
	 // }, 8000);
	 
	 // setTimeout(function() { 
		// 	operation.text(" radarChart.maxValue(.5).levels(7).update(); ");
		// 	radarChart.maxValue(.5).levels(7).update();
	 // }, 12000);
	 
	 // setTimeout(function() { 
		// 	operation.text(" radarChart.invert(4).update(); ");
		// 	radarChart.invert(4).update();
	 // }, 16000);

	 // setTimeout(function() { 
		// 	operation.text(" radarChart.ranges({'Contract Cost': [-1, 2]}).update(); ");
		// 	radarChart.ranges({'Contract Cost': [-1, 2]}).update();
	 // }, 20000);

	 // setTimeout(function() { 
		// 	operation.html(" data.forEach(function(e) { e.values.forEach(function(v) { v.value = (Math.random() * .6) + .2; }) })<br> radarChart.data(data).update(); ");
		// 	chart_data = JSON.parse(JSON.stringify(data));
		// 	chart_data.forEach(function(e) { e.values.forEach(function(v) { v.value = (Math.random() * .6) + .2; }) })
		// 	radarChart.data(chart_data).update();
	 // }, 24000);

	 // setTimeout(function() { 
		// 	operation.html(" var one = radarChart.slice(1, 2); <br> radarChart.data(one).update(); ");
		// 	var one = radarChart.slice(1, 2);
		// 	radarChart.data(one).update();
	 // }, 28000);

	 // setTimeout(function() { 
		// 	operation.html(" radarChart.ranges({'Contract Cost': []}).invert(4); <br> radarChart.data(data).update(); ");
		// 	radarChart.ranges({'Contract Cost': []}).invert(4);
		// 	radarChart.data(data).update();
	 // }, 32000);

	 // setTimeout(function() { 
		// 	operation.html(" radarChart.options({circles: {fill: 'violet'}}); <br> radarChart.options({axes: {lineColor: 'lightyellow'}}); <br> radarChart.options({circles: {color: '#FF99CC'}}); <br> radarChart.colors({'iPhone': 'black', 'Samsung': 'green', 'Nokia Smartphone': 'purple'}); ");
		// 	radarChart.options({circles: {fill: 'violet', color: '#FF99CC'}});
		// 	radarChart.options({axes: {lineColor: "lightyellow"}});
		// 	radarChart.colors({'iPhone': 'black', 'Samsung': 'green', 'Nokia Smartphone': 'purple'});
		// 	radarChart.update();
	 // }, 36000);

	 // setTimeout(function() { 
		// 	operation.text(" radarChart.options({circles: {maxValue: 1, levels: 3}, legend: {symbol: 'circle'}, filter: false}).update(); ");
		// 	radarChart.options({circles: {maxValue: 1, levels: 3}, legendSymbol: 'circle', filter: false}).update();
	 // }, 40000);

	 // setTimeout(function() { 
		// 	operation.text(" radarChart.height(300).width(300).options({'areas': {'dotRadius': 2}}).update(); ");
		// 	radarChart.height(300).width(300).options({'areas': {'dotRadius': 2}}).update();
	 // }, 44000);

	 // setTimeout(function() { 
		// 	operation.text(" radarChart.height(500).width(500).options({'areas': {'dotRadius': 4}}).update(); ");
		// 	radarChart.height(600).width(600).options({'areas': {'dotRadius': 4}}).update();
	 // }, 48000);

	 // setTimeout(function() { 
		// 	operation.html(" radarChart.options({circles: {fill: '#CDCDCD', color: '#CDCDCD'}}); <br> radarChart.options({filter: 'rc_glow'}); <br> radarChart.colors({}).data(data).update(); <br> radarChart.maxValue(.5).levels(7).filterAxes(7);");
		// 	radarChart.options({circles: {fill: '#CDCDCD', color: '#CDCDCD'}});
		// 	radarChart.options({filter: 'rc_glow'});
		// 	radarChart.maxValue(.5).levels(7).filterAxes(7);
		// 	radarChart.colors({}).data(data).update();
	 // }, 52000);

// }();
