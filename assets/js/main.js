
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === 'admin@sport.com' && password === '1234') {
    window.location.href = 'pages/dashboard.html';
  } else {
    alert('Invalid credentials');
  }
}

function logout() {
  alert('Logged out!');
}
