const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// ✅ Root route – fixes “Cannot GET /”
app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 Dockerized Node.js App is Running Successfully!</h1>
    <p>Welcome to your Dockerized web application.</p>
    <ul>
      <li><a href="/api">Test API Endpoint</a></li>
      <li><a href="/status">Server Status</a></li>
    </ul>
  `);
});

// Example API route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from API endpoint!' });
});

// Example Status route
app.get('/status', (req, res) => {
  res.json({
    status: 'OK',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date()
  });
});

// Export the app for server.js
module.exports = app;
