require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors("*"))

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (_req, res) {
    res.sendFile(__dirname + '/views/index.html');
  });
  
// your first API endpoint...
app.get('/api/hello', function (_req, res) {
    res.json({ greeting: 'hello API' });
  });

module.exports = app
