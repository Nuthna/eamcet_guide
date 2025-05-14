// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to show timeline section
function showTimeline() {
    const timeline = document.getElementById('timeline');
    const hero = document.querySelector('.hero');
    
    if (timeline && hero) {
        // Show timeline and hide hero section
        timeline.style.display = 'block';
        hero.style.display = 'none';
        
        // Smooth scroll to timeline
        timeline.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add click event listeners to buttons
document.querySelector('.primary-btn').addEventListener('click', showTimeline);

// Handle document preparation link click
document.querySelector('.timeline-item:first-child .learn-more').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'document_preparation.html';
});

function goBack() {
    const timeline = document.getElementById('timeline');
    const hero = document.querySelector('.hero');
    
    // Show hero and hide timeline section
    hero.style.display = 'flex';
    timeline.style.display = 'none';
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelector('.secondary-btn').addEventListener('click', () => {
    // Add your "Find Colleges" logic here
    console.log('Finding colleges...');
});

// Check if we should show timeline on page load
window.addEventListener('load', () => {
    // Check for timeline hash in URL
    if (window.location.hash === '#timeline') {
        showTimeline();
    }
    
    // Check if we're returning from registration page
    const isReturningFromRegistration = sessionStorage.getItem('returningFromRegistration');
    if (isReturningFromRegistration) {
        showTimeline();
        sessionStorage.removeItem('returningFromRegistration');
    }
});

// Remove modal functionality since we're using a separate page now
const modal = document.getElementById('videoModal');
if (modal) {
    modal.remove(); // Remove the modal from the DOM
} 