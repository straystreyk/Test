window.addEventListener('DOMContentLoaded', () => {
	lang = document.querySelectorAll('.lang');

	lang.forEach( function(element, index) {
		element.addEventListener('click', function(){
			lang.forEach( function(element, index) {
				element.classList.remove('active');
			});
			element.classList.add('active');
		});
	});

	let burger = document.querySelector('.burger');
	let menuOpen = document.querySelector('.header__wrapper');
	burger.addEventListener('click', function() {
		burger.classList.toggle('active-burger');
		menuOpen.classList.toggle('active-menu');
	});
});