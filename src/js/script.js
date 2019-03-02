document.addEventListener("DOMContentLoaded", function() {

	const body = document.getElementsByTagName('body')[0];
	const bulb = document.querySelector('.bulb');
	const logo = document.querySelector('.logo');
	const footerLogo = document.querySelector('.footer__logo');
	const menu = document.querySelector('.fa-bars');
	const nav = document.querySelector('.header__nav');

	console.log(body, bulb, logo, menu, nav);

//dark mode switcher
	bulb.addEventListener('click', function() {
		body.classList.toggle('dark');
		if (body.classList.contains('dark')) {
			logo.src = 'assets/logo-black.svg';
			footerLogo.src = 'assets/logo-black.svg';
		} else {
			logo.src = 'assets/logo.svg';
			footerLogo.src = 'assets/logo.svg';
		}
	});

// mobile navigation
	menu.addEventListener('click', function() {
		nav.classList.toggle('open');
	});

});