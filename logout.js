
const logoutMenuItem = document.getElementById('logout-menu-item');
logoutMenuItem.addEventListener('click', (event) => {
  event.preventDefault();

  fetch('/logout', {
    method: 'POST',
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      window.location.href = '/login';
    } else {
      console.error('Error logging out:', data.error);
    }
  })
  .catch((error) => {
    console.error('Error logging out:', error);
  });
});
