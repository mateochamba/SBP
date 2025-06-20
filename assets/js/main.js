function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-message');
  const loading = document.getElementById('loading');
  errorMsg.style.display = 'none';
  loading.style.display = 'flex';
  setTimeout(() => {
    loading.style.display = 'none';
    if (email === 'admin@sport.com' && password === '1234') {
      // Simular guardar sesión
      localStorage.setItem('user', JSON.stringify({ email }));
      window.location.href = 'pages/dashboard.html';
    } else {
      errorMsg.style.display = 'block';
      errorMsg.textContent = 'Correo o contraseña incorrectos.';
    }
  }, 1200);
}

function logout() {
  alert('Logged out!');
}
