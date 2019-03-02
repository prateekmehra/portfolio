function resetFilters(){
	resetMakeFilter();
	resetTransmissionFilter();
	resetVclassFilter();
	resetCylinderFilter();
}

function resetMakeFilter(){
	d3.selectAll("#makeMultiSelect ul li input").property('checked',false);
	$('#makeMultiSel').empty();
	$("#makeHida").show();
}

function resetTransmissionFilter(){
	d3.selectAll("#transmissionMultiSelect ul li input").property('checked',false);
	$('#transmissionMultiSel').empty();
	$("#transmissionHida").show();
}

function resetVclassFilter(){
	d3.selectAll("#vclassMultiSelect ul li input").property('checked',false);
	$('#vclassMultiSel').empty();
	$("#vclassHida").show();
}

function resetCylinderFilter(){
	d3.selectAll("#cylinderMultiSelect ul li input").property('checked',false);
	$('#cylinderMultiSel').empty();
	$("#cylinderHida").show();
}