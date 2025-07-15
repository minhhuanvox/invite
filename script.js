const hat = document.getElementById('hat');
const sections = document.querySelectorAll('header, section, footer');
hat.addEventListener('click', () => {
    document.getElementById('mainNav').style.display = 'flex';
    hat.style.display = 'none';
    sections.forEach(el => {
        el.style.display = 'block';
        setTimeout(() => el.classList.add('visible'), 100);
    });
});

function toggleMenu() {
    const nav = document.getElementById('navLinks');
    const icon = document.getElementById('menuIcon');
    nav.classList.toggle('active');

    const isActive = nav.classList.contains('active');

    // Reset class then add appropriate one
    icon.className = 'fa';
    if (isActive) {
        icon.classList.add('fa-regular', 'fa-rectangle-xmark');
    } else {
        icon.classList.add('fa-solid', 'fa-bars');
    }
}
