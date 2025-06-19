let lastScrollY = window.scrollY;

/* Header scroll effect */

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
	
    if (window.scrollY > lastScrollY) {
        header.classList.add('headerHidden');
    }
    else {
        header.classList.remove('headerHidden');
    }
	
    lastScrollY = window.scrollY;
});

/* Scroll effect when first shown on screen */

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
	});
}, {
	threshold: 0.1
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)); 

const hiddenElements2 = document.getElementById('HeroHeading');
observer.observe(hiddenElements2);

/* Scroll effect for the hero */
window.addEventListener('scroll', () => {
	const heroHeading = document.getElementById('HeroHeading');
	const heroByline =  document.getElementById('HeroByline');
	const scrollThreshold = 250;

	if (window.scrollY > scrollThreshold) {
		heroHeading.classList.add('fade');
		heroByline.classList.add('fade');
	}
	else {
		heroHeading.classList.remove('fade');
		heroByline.classList.remove('fade');
	}
});