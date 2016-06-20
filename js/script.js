$(document).ready(function() {
	$('.toggled').hide();
    $('.title, .delay1, .delay2, .delay3').css("visibility", "hidden");
	$('.title').css("visibility", "visible").hide().fadeTo(1000, 1);
	$('.delay1').css("visibility", "visible").hide().delay(750).fadeTo(1000, 1);
	$('.delay2').css("visibility", "visible").hide().delay(1250).fadeTo(1000, 1);
	$('.delay3').css("visibility", "visible").hide().delay(2000).fadeTo(1000, 1);

	$('.toggle').click(function() {
		$('.toggled').slideToggle();
	});
});

