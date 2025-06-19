let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
	const heroHeading = document.getElementById('HeroHeading');
	const heroByline = document.getElementById('HeroByline');
	
    if (window.scrollY > lastScrollY) {
        header.classList.add('headerHidden');
		heroHeading.classList.add('hidden');
		heroByline.classList.add('hidden');
    }
    else {
        header.classList.remove('headerHidden');
		heroHeading.classList.remove('hidden');
		heroByline.classList.remove('hidden');
    }
	
    lastScrollY = window.scrollY;
});

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
		else {
			entry.target.classList.remove('show');
		}
	});
}, {
	threshold: 0.1
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)); 
