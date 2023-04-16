document.getElementById('userName').innerHTML = localStorage.getItem('userName');



document.getElementById('logBtn').addEventListener('click', function () {
    localStorage.removeItem('userName');
})