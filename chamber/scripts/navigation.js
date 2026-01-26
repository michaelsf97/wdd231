// Fetch and display members
async function displayMembers() {
    try {
        // Step 1: Fetch the JSON file
        const response = await fetch('data/members.json');
        
        // Step 2: Convert to JavaScript object
        const data = await response.json();
        
        // Step 3: Find the container element
        const container = document.querySelector('#members-container');
        
        // Step 4: Check if container exists
        if (container) {
            // Step 5: Loop through each member in the array
            data.members.forEach(member => {
                // Create HTML for each member
                const memberCard = `
                    <div class="member-card">
                        <img src="${member.image}" alt="${member.company_name}">
                        <h3>${member.company_name}</h3>
                        <p><strong>Address:</strong> ${member.company_address}</p>
                        <p><strong>Phone:</strong> ${member.company_phone_number}</p>
                        <p><strong>Membership Level:</strong> ${member.membership_level}</p>
                        <p><a href="${member.company_website_url}" target="_blank">Visit website</a></p>
                    </div>
                `;
                
                // Step 6: Add this card to the container
                container.innerHTML += memberCard;
            });
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

/* GRID LIST VIEW */
const gridViewBtn = document.querySelector('#grid-view');
const listViewBtn = document.querySelector('#list-view');
const membersContainer = document.querySelector('#members-container');

if (gridViewBtn && listViewBtn && membersContainer) {
    gridViewBtn.addEventListener('click', () => {
        membersContainer.classList.remove('list-view');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
    });

    listViewBtn.addEventListener('click', () => {
        membersContainer.classList.add('list-view');
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
    });
}

// Display last modified date in footer
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
}
