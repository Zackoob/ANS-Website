/* Header scroll effect */

let lastScrollY = window.scrollY;
let scrollAmount = 0;

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const headerThreshold = 100; // Amount of scroll required for the header to be hidden or return

    scrollAmount += window.scrollY - lastScrollY;

    if (window.scrollY > lastScrollY && scrollAmount > headerThreshold) {
        header.classList.add('header-hidden');
        scrollAmount = 0;
    }
    else if (scrollAmount < headerThreshold && window.scrollY < lastScrollY) {
        header.classList.remove('header-hidden');
        scrollAmount = 0;
    }
	
    lastScrollY = window.scrollY;
});

/* Scroll effecs */

const sections = {
    hero: [
        document.getElementById('hero-header'),
        document.getElementById('hero-byline')
    ],
    welcome: [
        document.getElementById('welcome-header'),
        document.getElementById('welcome-paragraph')
    ],
    vision: [
        document.getElementById('vision-header'),
        document.getElementById('vision-paragraph')
    ],
    projects: [
        document.getElementById('projects-header'),
        document.getElementById('projects-paragraph')
    ],
}

const contentBackground = document.getElementById('content-background'); // Get the background of the content

let currentSection = 'hero'; // Current section for showOnly function - default 'hero' as page starts on hero

function showOnly(sectionName) {
    if (!sectionName) return;
    if (currentSection == sectionName) return;
    currentSection = sectionName;

	// Hide all text
    const allSections = Object.values(sections).flat();
    allSections.forEach(el => {
        if (el){
            el.classList.remove('visible');
            el.classList.add('hidden');
        }
    });

	// Change the background for the next element
    setTimeout(() => {
        contentBackground.classList.remove('welcome', 'vision', 'projects', 'hero');
        contentBackground.classList.add(sectionName);
    }, 750);

	// Show the current element	
    setTimeout(() => {
        const visibleElements = sections[sectionName];
        if (!visibleElements) return;
        visibleElements.forEach(el => {
            if (el) {
                el.classList.remove('hidden');
                el.classList.add(sectionName);
				hideAllExcept(sectionName);
            }
        });
    }, 1500);
}

// Ensure all other elements are hidden
function hideAllExcept(sectionName) {
	if (!sectionName) return;
	
	for (const [name, element] of Object.entries(sections)) {
		element.forEach(el => {
			if (el) {
				el.classList.toggle('hidden', name !== sectionName);
				el.classList.toggle('visible', name == sectionName);
			}
		});
	}
}

addEventListener('scroll', () => {
    // Scroll thresholds for elements to appear on screen 
    const scrollY = window.scrollY
    const welcomeThreshold = 750;
    const visionThreshold = 1500;
    const projectThreshold = 2250;

    // Check what threshold page scroll is in
    // Start from largest to smallest value threshold to work
    if (scrollY > projectThreshold) {		
		showOnly('projects');
    }
    else if (scrollY > visionThreshold) {
    	showOnly('vision'); 
    }
    else if (scrollY > welcomeThreshold) {
        showOnly('welcome');
    }
    else {
        showOnly('hero');
    }
});

