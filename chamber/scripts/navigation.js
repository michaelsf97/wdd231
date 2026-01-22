// Fetch and display members
async function displayMembers() {
    try {
        const response = await fetch('data/members.json');
        const member= await response.json();
        
        // Create member card
        data.members.forEach(member => {
        const memberCard = `
            <div class="member-card">
                <img src="${member.image}" alt="${member.company_name}">
                <h3>${member.company_name}</h3>
                <p><strong>Address:</strong> ${member.company_address}</p>
                <p><strong>Phone:</strong> ${member.company_phone_number}</p>
                <p><a href="${member.company_website_url}" target="_blank">Visit website </a></p>
            </div>
        `;
                    container.innerHTML += memberCard;
        });
        
        // Add to page container directly from HTML
        const container = document.querySelector('#members-container');
        if (container) {
            container.innerHTML = memberCard;
        }
        
    } catch (error) {
        console.error('Error loading member data:', error);
    }
}

// Call the function when page loads
displayMembers();

/* HAMBURGER BUTTON */
const navButton = document.querySelector('#hamb-btn');
const navBar = document.querySelector('#nav-bar');

// Toggle the show class
navButton.addEventListener('click', () => {
    console.log('Clicked');
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

// Remove show class when resizing to larger screen
window.addEventListener('resize', () => {
    if (window.innerWidth >= 770) {
        navButton.classList.remove('show');
        navBar.classList.remove('show');
    }
});

