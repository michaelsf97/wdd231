document.querySelector('form').addEventListener('DOMContentLoaded', function() {
document.querySelector('form').addEventListener('submit', function() {

    document.getElementById('timestamp').value = new Date().toISOString();
});
});