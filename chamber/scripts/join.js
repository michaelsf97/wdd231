document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function() {
        document.getElementById('timestamp').value = new Date().toISOString();
    });
});

/* 1. Cards */

const cardData = [
    { title: 'Membership Levels', content: 'Details about membership levels.' },
    { title: 'Bronze Membership', content: 'Bronze level benefits and info.' },
    { title: 'Silver Membership', content: 'silver level benefits and info. '},
    { title: 'Gold Membership', content: 'Gold level benefits and info.' },
];

const container = document.getElementById('cards-container');
if (container) {
    cardData.forEach(data => {
        const card = document.createElement('div');
        card.className = 'card';

        const title = document.createElement('h3');
        title.textContent = data.title;
        card.appendChild(title);

        const content = document.createElement('p');
        content.textContent = data.content;
        card.appendChild(content);

        // Button to open dialog
        const button = document.createElement('button');
        button.textContent = 'Learn More';
        button.setAttribute('type', 'button');
        button.id = `open-dialog-${idx}`;
        card.appendChild(button);

        // Dialog
        const dialog = document.createElement('dialog');
        dialog.id = `dialog-${idx}`;

        const dialogTitle = document.createElement('h4');
        dialogTitle.textContent = data.dialogTitle;
        dialog.appendChild(dialogTitle);

        const dialogContent = document.createElement('p');
        dialogContent.textContent = data.dialogContent;
        dialog.appendChild(dialogContent);

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.setAttribute('type', 'button');
        closeBtn.id = `close-dialog-${idx}`;
        dialog.appendChild(closeBtn);

        card.appendChild(dialog);

        // Button event listeners
        button.addEventListener('click', () => {
            dialog.showModal();
        });
        closeBtn.addEventListener('click', () => {
            dialog.close();
        });

        container.appendChild(card);
    });
}

const openDialogBtn = document.querySelector('#open-nonprofit-dialog');
const nonProfitDialog = document.querySelector('#nonprofit-dialog');
openDialogBtn.addEventListener('click', () => {
    nonProfitDialog.showModal();
});

const closenonProfitDialog = document.querySelector('#close-nonprofit-dialog');
closenonProfitDialog.addEventListener('click', () => {
    nonProfitDialog.close();
});

const openDialogBtn = document.querySelector('#open-bronze-dialog-btn');
const bronzeDialog = document.querySelector('#bronze-dialog');
openDialogBtn.addEventListener('click', () => {
    bronzeDialog.showModal();
});
document.addEventListener('DOMContentLoaded', function() {
document.querySelector('form').addEventListener('submit', function() {

    document.getElementById('timestamp').value = new Date().toISOString();
});
});

/* 1. Cards */

const cardData = [
    { title: 'Membership Levels', content: 'Details about membership levels.' },
    { title: 'Bronze Membership', content: 'Bronze level benefits and info.' },
    { title: 'Silver Membership', content: 'silver level benefits and info. '},
    { title: 'Gold Membership', content: 'Gold level benefits and info.' },
];

const container = document.getElementById('cards-container');
if (container) {
    cardData.forEach(data => {
        const card = document.createElement('div');
        card.className = 'card';

        const title = document.createElement('h3);
        title.textContent = data.title;
        card.appendChild(title);

        const content = document.createElement('p');
        content.textContent = data.content;
        card.appendChild(content);

        container.appendChild(card);



    });
}

const card = document.createElement('div');
card.className = 'card';

/* 2. Content */
const title = document.createElement('h3');
title.textContent = 'Membership Levels';
card.appendChild(title);

const openDialogBtn = document.querySelector('#open-nonprofit-dialog');
const nonProfitDialog = document.querySelector('#nonprofit-dialog');
openDialogBtn.addEventListener('click', () => {
    nonProfitDialog.showModal();
});

const closenonProfitDialog = document.querySelector('#close-nonprofit-dialog');
closenonProfitDialog.addEventListener('click', () => {
    nonProfitDialog.close();
});


const openDialogBtn = document.querySelector('#open-bronze-dialog-btn');
const bronzeDialog = document.querySelector('#bronze-dialog');
openDialogBtn.addEventListener('click', () => {
bronzeDialog.showModal();
});







