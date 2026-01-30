document.querySelector('form').addEventListener('submit', function() {

    document.getElementById('timestamp').value = new Date().toISOString();
});