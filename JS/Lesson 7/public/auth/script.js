// Регистрация
async function register() {
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;

  const res = await fetch('/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  document.getElementById('message').textContent = data.message;
}


// Логин
async function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const res = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  document.getElementById('message').textContent = data.message;

  if (data.message === 'Login successful') {
    localStorage.setItem('username', username); 
    window.location.href = '../location/index.html'; // переход на другую страницу
  }
}
