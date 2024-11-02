// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Fetch lecturer data from JSON
    fetch('lecturers.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const lecturerContainer = document.getElementById('lecturer');
            data.forEach(lecturer => {
                const card = document.createElement('div');
                card.className = 'instructor-card';
                card.onclick = () => toggleBio(card);

                card.innerHTML = `
                    <img src="${lecturer.image}" alt="${lecturer.name}" class="instructor-image">
                    <h3>${lecturer.name}</h3>
                    <p class="instructor-bio">${lecturer.shortBio}</p>
                    <div class="full-bio" style="display: none; transition: all 0.3s;">
                        <p>${lecturer.fullBio}</p>
                        <button onclick="window.location.href='${lecturer.targetPage}';">Go to Target Page</button>
                    </div>
                `;
                lecturerContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching lecturer data:', error));

    // Add functionality for the explore button
    const exploreButton = document.getElementById('explore-button');

    exploreButton.addEventListener('click', () => {
        console.log('Explore button clicked!');
        // Add additional functionality here as needed
        // Example: Redirect to another page or show more content
        // window.location.href = 'explore.html'; // Uncomment to redirect
    });

    // Trigger fade-in animation for h1 after the page loads
    const h1 = document.querySelector('.hero-content h1');
    h1.style.opacity = '1'; // Set opacity to 1 after loading
});

// Function to toggle the display of the full bio
function toggleBio(card) {
    const fullBio = card.querySelector('.full-bio');
    if (fullBio.style.display === 'none' || fullBio.style.display === '') {
        fullBio.style.display = 'block'; // Show full bio
    } else {
        fullBio.style.display = 'none'; // Hide full bio
    }
}

// Function to toggle the mobile menu
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
document.getElementById("explore-button").addEventListener("click", function() {
    // Scroll to the about-instructors section smoothly
    document.getElementById("about-instructors").scrollIntoView({
        behavior: "smooth" // Enable smooth scrolling
    });
});