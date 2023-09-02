
  const toggleButton = document.querySelector('.mobile-nav-toggle');
const navbar = document.querySelector('#navbar');
  document.addEventListener('click', function(e) {
    if (!navbar.contains(e.target) && !toggleButton.contains(e.target)) {
        navbar.classList.remove('navbar-mobile');
        toggleButton.classList.remove('bi-x');
        toggleButton.classList.add('bi-list');
    }
});
