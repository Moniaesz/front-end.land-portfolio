document.addEventListener("DOMContentLoaded", function() {

	const menu = document.querySelector('.fa-bars');
	const nav = document.querySelector('.header__nav');

	console.log(menu, nav);

// mobile navigation
	menu.addEventListener('click', function() {
		nav.classList.toggle('open');
	});

});