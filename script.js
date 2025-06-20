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

//const hiddenElements2 = document.getElementById('HeroHeading');
//observer.observe(hiddenElements2);


/* Scroll effect for the hero */
window.addEventListener('scroll', () => {
	const heroHeading = document.getElementById('HeroHeading');
	const heroByline =  document.getElementById('HeroByline');
	const heroThreshold = 250;


	if (window.scrollY > heroThreshold) {
		heroHeading.classList.add('fade');
		heroByline.classList.add('fade');
	}
	else {
		heroHeading.classList.remove('fade');
		heroByline.classList.remove('fade');
	}
});


/* Scroll effect for the welcome */

window.addEventListener('scroll', () => {
	const welcomeBackground = document.getElementById('welcomeBackground');
	const scrollThreshold = 500;
	const screenThreshold = 900;

	if (window.scrollY > screenThreshold) {
		welcomeBackground.classList.add('project-background');
		welcomeBackground.classList.remove('fade');
	}
	else if (window.scrollY > scrollThreshold) {
		welcomeBackground.classList.remove('fade');
		welcomeBackground.classList.remove('project-background');
	}
	else {
		welcomeBackground.classList.add('fade');
		welcomeBackground.classList.remove('project-background');
	}
});

window.addEventListener('scroll', () => {
	const projectsHeader = document.getElementById('projects-header');
	const projectsParagraph = document.getElementById('projects-paragraph');
	const welcomeBackground = document.getElementById('welcomeBackground');
	const projectThreshold = 1000;

	if (window.scrollY > projectThreshold) {
		projectsHeader.classList.remove('fade');
		projectsParagraph.classList.remove('fade');
	}
	else {
		projectsHeader.classList.add('fade');
		projectsParagraph.classList.add('fade');
	}
});