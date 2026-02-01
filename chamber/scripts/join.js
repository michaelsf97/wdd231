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

const openDialogBtn = document.querySelector('#open-nonprofit-dialog').onclick = function() {
const nonProfitDialog = document.querySelector('#nonprofit-dialog').showModal();
};
openDialogBtn.addEventListener('click', () => {
    nonProfitDialog.showModal();
});

const closenonProfitDialog = document.querySelector('#close-nonprofit-dialog');
closenonProfitDialog.addEventListener('click', () => {
    nonProfitDialog.close();
});