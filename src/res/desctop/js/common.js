"use strict";
$(function(){

	$(document).ready(function(){
		$(".scroll").mCustomScrollbar({
			axis: "y"
		});
		$(".scroll-select").mCustomScrollbar({
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


/*make select of div*/
	$(document).ready(function() {

		// Default dropdown action to show/hide dropdown content
		$('.js-dropp-action').click(function(e) {
			e.preventDefault();
			// $(this).toggleClass('js-open');

			if($(this).hasClass('js-open')){
				$(this).removeClass('js-open');
			}else{
				$('.js-dropp-action').removeClass('js-open');
				$('.dropp-body').removeClass('js-open');
				$(this).addClass('js-open');
			}

			$(this).parent().next('.dropp-body').toggleClass('js-open');

		});

		// Using as fake input select dropdown
		$('label').click(function() {

			$('.dropp-body').removeClass('js-open');
			$('.dropp-body label').removeClass('js-open');
			$('.dropp-header__btn').removeClass('js-open');

			$(this).siblings().removeClass('checked');
			$(this).addClass('checked');

			$(this).children("input").change(function() {
				total_constructor_sum();
				// if($( this ).prop( "checked" )) { var value = $( this ).val(); }
				if($( this ).prop( "checked" )) {
					var value = $( this ).parent().find(".label").html();
				}
				$(this).parents(".dropp").find(".dropp-header").find(".js-value").html(value).addClass("added");
			});
		});
	});

/*end make select of div*/


/* onhover description save/reset */
	$(".constructor__save a").hover(function(){
		//действия при ховере

		$(this).next().html($(this).data("title")).show();

	}, function(){
		// при потере ховера
		$(this).next().hide();
	});
/* end onhover description save/reset */

/*reset constructor items*/
	$("#reset_constructor").on("click", function(){
		event.preventDefault();
		$('.dropp-header__title').each(function(){
			var caption = $(this).data("caption");
			$(this).removeClass("added").html(caption);
		});
		$("label").removeClass("checked");
		total_constructor_sum();

		// + удалить из формы заказа


	});
/*end reset constructor items*/

/*count total constructor sum*/
	function total_constructor_sum(){
		var count = 0;

		$(".added .item__price").each( function(){
			count += Number($(this).html());
		});

		$(".constructor_total_price").html(count);
		return count;
	}
/*end count total constructor sum*/



















});