;(function () {

	'use strict';
	var offcanvasMenu = function() {
		$('body').prepend('<div id="amin-offcanvas" />');
		$('#amin-offcanvas').prepend('<ul id="amin-side-links">');
		$('body').prepend('<a href="#" class="js-amin-nav-toggle amin-nav-toggle"><i></i></a>');
		$('#amin-offcanvas').append($('#amin-header nav').clone());
	};
	var burgerMenu = function() {

		$('body').on('click', '.js-amin-nav-toggle', function(event){
			var $this = $(this);

			$('body').toggleClass('amin-overflow offcanvas-visible');
			$this.toggleClass('active');
			event.preventDefault();

		});

		$(window).resize(function() {
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-amin-nav-toggle').removeClass('active');
		   }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-amin-nav-toggle').removeClass('active');
		   }
		});

	};
	$(function(){
		offcanvasMenu();
		burgerMenu();
		
	});
}());