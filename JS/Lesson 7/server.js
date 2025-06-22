const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public/auth'));
app.use('/location', express.static('public/location'));
app.use('/weather', express.static('public/weather'));

const USERS_FILE = 'data\\users.json';


function readUsers() {
  if (!fs.existsSync(USERS_FILE)) return [];
  const data = fs.readFileSync(USERS_FILE);
  return JSON.parse(data);
}


function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Регистрация
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();

  if (users.find(u => u.username === username)) {
    return res.json({ message: 'Username already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  writeUsers(users);
  res.json({ message: 'Registered successfully' });
});

// Вход
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();

  const user = users.find(u => u.username === username);
  if (!user) return res.json({ message: 'User not found' });

  const match = await bcrypt.compare(password, user.password);
  if (match) {
    res.json({ message: 'Login successful' });
  } else {
    res.json({ message: 'Invalid password' });
  }
});

// Сохранение координат 
app.post('/location', (req, res) => {
  const { username, lat, lng } = req.body;

  if (!username || lat == null || lng == null) {
    return res.status(400).json({ message: 'Missing data' });
  }

  const users = readUsers();
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.lat = lat;
  user.lng = lng;

  writeUsers(users);
  res.json({ message: 'Location updated successfully', lat, lng });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
