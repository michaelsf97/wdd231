document.addEventListener('DOMContentLoaded', function() {
document.querySelector('form').addEventListener('submit', function() {

    document.getElementById('timestamp').value = new Date().toISOString();
});
});

/* 1. Cards */

const card = document.createElement('div');
card.className = 'card';

/* 2. Content */
const title = document.createElement('h3');
title.textContent = 'Membership Levels';
card.appendChild(title);

const nonProfitDialog = document.querySelector('#nonprofit-dialog');
const closenonProfitDialog = document.querySelector('#close-nonprofit-dialog');
nonProfitDialog.shownonProfitDialog();

closenonProfitDialog.addEventListener('click', () => {
    nonProfitDialog.close();
});