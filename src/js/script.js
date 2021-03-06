document.addEventListener("DOMContentLoaded", function() {

// render map with custom marker
var map = L.map('map').setView([52.409538, 16.931990], 12);

var mapIcon = L.icon({
	iconUrl: 'assets/logo-map.svg',
	iconSize: [37, 95]
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([52.423820, 16.91996], {icon: mapIcon}).addTo(map);

//dark mode switcher
	const body = document.getElementsByTagName('body')[0];
	const bulb = document.querySelector('.bulb');
	const logo = document.querySelector('.logo');
	const footerLogo = document.querySelector('.footer__logo');
	const fold = document.querySelector('.fold');

	function changeColorMode() {
		body.classList.toggle('dark');
		if (body.classList.contains('dark')) {
			logo.src = 'assets/logo-black.svg';
			footerLogo.src = 'assets/logo-black.svg';
			fold.style.backgroundImage = "url('../assets/city-dark.jpg')";
		} else {
			logo.src = 'assets/logo.svg';
			footerLogo.src = 'assets/logo.svg';
			fold.style.backgroundImage = "url('../assets/city.jpg')";
		}
	}

	bulb.addEventListener('click', changeColorMode);
	bulb.addEventListener('keypress', changeColorMode);

// mobile navigation
	const menu = document.querySelector('.menu');
	const nav = document.querySelector('.header__nav');

	menu.addEventListener('click', function() {
		nav.classList.toggle('open');
		menu.classList.toggle('open');
	});

	nav.addEventListener('click', function(event) {
		if(event.target.tagName.toLowerCase() === 'a') {
			nav.classList.toggle('open');
			menu.classList.toggle('open')
		}
	});

//header animation on scroll
	const header = document.querySelector('header');

	function pageScroll() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			header.classList.add('scroll');
		} else {
			header.classList.remove('scroll');
		}
	}

	window.onscroll = function() {
		pageScroll()
	}

});