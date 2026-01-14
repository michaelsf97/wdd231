// Footer on JavaScript Form Validation.

document.getElementById("currentyear").textContent = new Date().getFullYear();



const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        averageRating: 4.5,
    },
    {
        id: "fc-2050",
        name: "Power Laces",
        averageRating: 4.7,
    },
    {
        id: "fs-1987",
        name: "Time Circuit",
        averageRating: 3.5,
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor",
        averageRating: 3.9,
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer",
        averageRating: 5.0,
    }
];

// Dynamically populate the product select options
document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('product_name');
    if (select) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            select.appendChild(option);
        });
    }
});


const rangevalue= 
document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.range;
}



