document.addEventListener('DOMContentLoaded', function() {
    

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function() {
            document.getElementById('timestamp').value = new Date().toISOString();
        });
    }

    // Card data with dialog info
    const cardInfo = [
        {
            title: 'Nonprofit Membership',
            content: 'Design for nonprofit organizations.',
            dialogTitle: 'Nonprofit Membership Details',
            dialogContent: 'Details and benefits for nonprofits organizations.'
        },
        {
            title: 'Bronze Membership',
            content: 'Bronze level benefits and info.',
            dialogTitle: 'Bronze Membership Details',
            dialogContent: 'Description of benefits with this level.'
        },
        {
            title: 'Silver Membership',
            content: 'Silver level benefits and info.',
            dialogTitle: 'Silver Membership Details',
            dialogContent: 'Description of benefits with this level.'
        },
        {
            title: 'Gold Membership',
            content: 'Gold level benefits and info.',
            dialogTitle: 'Gold Membership Level Details',
            dialogContent: 'Description of benefits with this level.'
        }
    ];

    // Use the correct container id
    const container = document.getElementById('card-container');
    if (container) {
        cardInfo.forEach((data, idx) => {
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
});







