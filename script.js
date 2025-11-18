const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '↑';
scrollBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #e64b24;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(230, 75, 36, 0.4);
`;
document.body.appendChild(scrollBtn);
let lastScrollY = 0;
const navbar = document.querySelector('.nav-bar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.transform = 'scale(1)';
        navbar.classList.add('scrolled');
    } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.transform = 'scale(0.8)';

        navbar.classList.remove('scrolled');
    } 
    if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollBtn.addEventListener('mouseenter', () => {
    scrollBtn.style.background = '#ff6b4a';
    scrollBtn.style.transform = 'scale(1.1)';
});

scrollBtn.addEventListener('mouseleave', () => {
    scrollBtn.style.background = '#e64b24';
    scrollBtn.style.transform = 'scale(1)';
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    const buttons = document.querySelectorAll('.nav-links button');
    pages.forEach(page => page.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    const clickedButton = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(`'${pageId}'`));
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}