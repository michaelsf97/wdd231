// review.js
// Increment and display the review submission counter using localStorage

document.addEventListener('DOMContentLoaded', function() {
    // Get the current count from localStorage, or start at 0
    let count = localStorage.getItem('reviewCount');
    count = count ? parseInt(count) : 0;

    // Increment the count
    count++;

    // Save the updated count back to localStorage
    localStorage.setItem('reviewCount', count);

    // Display the count on the page (assumes an element with id="reviewCounter")
    const counterElement = document.getElementById('reviewCounter');
    if (counterElement) {
        counterElement.textContent = `You have submitted this form ${count} times.`;
    }
});
