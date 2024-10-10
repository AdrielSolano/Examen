document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, index * 100); 
    });
});

document.getElementById('year').textContent = new Date().getFullYear();