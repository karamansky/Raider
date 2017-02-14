"use strict";
$(function(){

	$(window).on("load",function(){
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
		navText 			: ["",""]
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