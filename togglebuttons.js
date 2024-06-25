const toggleButton = document.getElementById('toggle-button');
const menuContainer = document.getElementById('menu-container');

toggleButton.addEventListener('click', () => {
  menuContainer.classList.toggle('show');
});

document.addEventListener('click', (event) => {
  if (!menuContainer.contains(event.target) &&!toggleButton.contains(event.target)) {
    menuContainer.classList.remove('show');
  }
});
