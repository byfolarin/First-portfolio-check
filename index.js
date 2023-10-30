function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', toggleMenu);
    