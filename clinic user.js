const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
 .then((response) => response.json())
 .then((data) => {
    if (data.success) {
      window.location.href = '/appointments';
    } else {
      console.error('Error logging in:', data.error);
    }
  })
 .catch((error) => {
    console.error('Error logging in:', error);
  });
});
