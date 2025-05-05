const toggleBtn = document.getElementById('menu-toggle');
const nav = document.getElementById('navigation');

toggleBtn.addEventListener('click', () => {
     nav.classList.toggle('show');
});
