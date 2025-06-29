/*
NO LONGER IN USE
*/

let lastScrollY = window.scrollY;

/* Header scroll effect */

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
	const scrollThreshold = 300;
    if (window.scrollY > lastScrollY && window.scrollY % lastScrollY > scrollThreshold) {
        header.classList.add('headerHidden');
    }
    else {
        header.classList.remove('headerHidden');
    }
	
    lastScrollY = window.scrollY;
});


/* Scroll effect when first shown on screen 

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
hiddenElements.forEach((el) => observer.observe(el)); */

//const hiddenElements2 = document.getElementById('HeroHeading');
//observer.observe(hiddenElements2);


/* Scroll effect for the hero */
window.addEventListener('scroll', () => {
	const heroHeading = document.getElementById('HeroHeading');
	const heroByline =  document.getElementById('HeroByline');
	const heroThreshold = 400;


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
	const welcomeHeader = document.getElementById('welcome-header');
	const welcomeParagraph = document.getElementById('welcome-paragraph');
	const scrollThreshold = 400;
	const screenThreshold = 1400;

	if (window.scrollY > screenThreshold) {
		welcomeBackground.classList.add('project-background');
		welcomeBackground.classList.remove('fade');

		welcomeHeader.classList.remove('fade');
		welcomeParagraph.classList.remove('fade');
		welcomeHeader.classList.add('fade-out');
		welcomeParagraph.classList.add('fade-out')
	}
	else if (window.scrollY > scrollThreshold) {
		welcomeBackground.classList.remove('fade');
		welcomeBackground.classList.remove('project-background');

		welcomeHeader.classList.remove('fade');
		welcomeParagraph.classList.remove('fade');
		welcomeHeader.classList.remove('fade-out');
		welcomeParagraph.classList.remove('fade-out');
	}
	else {
		welcomeBackground.classList.add('fade');
		welcomeBackground.classList.remove('project-background');

		welcomeHeader.classList.add('fade');
		welcomeParagraph.classList.add('fade');
		welcomeHeader.classList.remove('fade-out');
		welcomeParagraph.classList.remove('fade-out');
	}
});

window.addEventListener('scroll', () => {
	const projectsHeader = document.getElementById('projects-header');
	const projectsParagraph = document.getElementById('projects-paragraph');
	const welcomeBackground = document.getElementById('welcomeBackground');
	const projectThreshold = 1400;

	if (window.scrollY > projectThreshold) {
		projectsHeader.classList.remove('fade');
		projectsParagraph.classList.remove('fade');

	}
	else {
		projectsHeader.classList.add('fade');
		projectsParagraph.classList.add('fade');
	}
}); 




/* Reworked code for scrolling */

const headings = {
	welcomeH: "Welcome to All-Nighter Studios",
	visionH: "Our Vision",
	projectsH: "Our Projects"
};

const paragraphs = {
	welcomeP: "Welcome to the All-Nighter Studios website! Scroll down to learn more about our vision and future projects.",
	visionP: "Our vision at All-Nighter Studios is to give power back to the players. Modern game studios revolve around stakeholders and sponsers, not the player. We understand that in order to make a successful game we must listen to you the player, not some stakeholders looking to get a return on investment, not people that don't even associate with gaming, and not people who are constantly looking for more ways of squeezing the players of their money. We are a studio made by gamers, for gamers. We want to make games that we would play ourselves, that you would play and enjoy, and most importantly respect your time and money. Through transparency, community engagement, and our dedication to quality, we aim to create masterful stories and unforgettable experiences, through thrilling highs and gut-wrenching lows, and a world that is alive all for you to explore. We are All-Nighter Studios, and we are here to change the game.",
	projectsP: "Our first project is still in the early stages of development, check back for more information soon!"
};

// Function to get section based of scroll
// Use by getSection(window.scrollY)
function getSection(scrollY) {
	// Set scroll threshold for each element
	const welcomeThreshold = 500;
	const visionThreshold = 1000;
	const projectsThreshold = 1500;

	// Check if scroll is in threshold of element
	// Enter thresholds from largest (top) to smallest (bottom) else code won't work
	if (scrollY > projectsThreshold) return "projects";
	if (scrollY > visionThreshold) return "vision";
	if (scrollY > welcomeThreshold) return "welcome";
}

let contentHeader = document.getElementById('content-header');
let contentParagraphs = document.getElementById('content-paragraph');

window.addEventListener('scroll', () => {
	const section = getSection(window.scrollY);
	if (section == "welcome") {
		contentHeader.textContent = welcomeH;
		contentParagraphs.textContent = welcomeP;
	}
	else if (section == "vision") {
		contentHeader = visionH;
		contentParagraph = visionP;
	}
	else if (section == "projects") {
		contentHeader = projectsH;
		contentParagraph = projectsP;
	}
});