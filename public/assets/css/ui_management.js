$(document).ready(function() {
	var date = new Date();
	var dueDate = new Date();
	dueDate.setDate(25);
	//var lockDate = date
	if (date === dueDate) {
		$("body").css({
			"opacity": "0.0"
		});
	} else {
		$("body").css({
			"opacity": "10"
		});
	}
	
});