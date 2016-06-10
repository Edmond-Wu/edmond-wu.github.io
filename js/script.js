$(document).ready(function() {
	/*$('.aboutimages').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3
	});*/
	$('#toggled').hide();
	$('#about-toggled1').hide();
	$('#about-toggled2').hide()
	$('#resource-toggled').hide();
	$('#projects-toggled').hide();
    $('.title').hide();
	$('.delay1').hide();
	$('.delay2').hide();
	$('.delay3').hide();
	$('.delay4').hide();
	$('.title').fadeTo(1000, 1);
	$('.delay1').delay(750).fadeTo(1000, 1);
	$('.delay2').delay(1250).fadeTo(1000, 1);	
	$('.delay3').delay(2000).fadeTo(1000, 1);
	$('.delay4').delay(2500).fadeTo(1000, 1);

	$('#toggle').click(function() {
		$('#toggled').slideToggle();
	});
	$('#toggle-about1').click(function() {
		$('#about-toggled1').slideToggle();
	});
	$('#toggle-about2').click(function() {
		$('#about-toggled2').slideToggle();
	});
	$('#toggle-resources').click(function() {
		$('#resource-toggled').slideToggle();
	});
	$('#toggle-projects').click(function() {
		$('#projects-toggled').slideToggle();
	});
});

