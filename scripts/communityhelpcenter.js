// communityhelpcenter.js - Handles comment submission and display

document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('comments');
    const commentList = document.getElementById('commentList');

    // Load comments from localStorage

    function loadComments() {
        commentList.innerHTML = '';
        const comments = JSON.parse(localStorage.getItem('communityComments') || '[]');
        comments.forEach (comment => {
            const li = document.createElement('li');
            li.textContent = comment;
            commentList.appendChild(li);
        });
    }

    // Handle form submission

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const comment = commentInput.value.trim();
        if (comment) {
            const comments = JSON.parse(localStorage.getItem('communityComments') || '[]');
            comments.push(comment);
            localStorage.setItem('communityComments', JSON.stringify(comments));
            commentInput.value = '';
            loadComments();
        }
    });

    loadComments();
});
