"use strict";
$(function(){

	$(document).ready(function(){
		$(".scroll").mCustomScrollbar({
			axis: "y"
		});
	});

/*popup button, popup form*/
	$(".popup").magnificPopup();
	$(document).on('click', '.close_popup', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
/*end popup button, popup form*/


/*owl-carousel configurations*/
	$(".slider").owlCarousel({
		items					: 1,
		loop					:true,
		navigation		:true,
		navText 			: ["",""],
		itemsDesktop 			: [1200,1],
		itemsDesktopSmall : [992,1],
		itemsTablet				: [768,1],
		itemsMobile 			: [450,1]
	});
	var slider = $(".slider").data('owlCarousel');
	$(".prev").click(function(){
		slider.prev();
	});
	$(".next").click(function(){
		slider.next();
	});
/*end owl-carousel configurations*/



/*show / hide description*/
	$(".description__info").on("click", function(){
		event.preventDefault();
		var id = $(this).attr("href");
		$("#"+id).show();
	});
	$(".close_description").on("click", function(){
		event.preventDefault();
		$(this).parent().hide();
	});
/*show / hide description*/


});