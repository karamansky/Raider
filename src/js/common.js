"use strict";

$(function(){

	$(window).on("load",function(){
		$(".scroll").mCustomScrollbar({
			axis: "y"
		});
	});


	$(".description__info").on("click", function(){
		event.preventDefault();
		var id = $(this).attr("href");
		$("#"+id).show();
	});
	$(".close_description").on("click", function(){
		event.preventDefault();

		$(this).parent().hide();

	});



});