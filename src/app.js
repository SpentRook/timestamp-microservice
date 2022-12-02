require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors("*"))

app.use(express.static('src/public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (_req, res) {
    res.sendFile(__dirname + '/views/index.html');
  });
  
// your first API endpoint...
app.get('/api/hello', function (_req, res) {
    res.json({ greeting: 'hello API' });
  });

app.get('/api/:date', (req, res)=> {
    const reqDate = req.params.date
    const dateFormatted = !isNaN(reqDate) ? +reqDate : reqDate
    const date = new Date(dateFormatted)

    if(date.toDateString() === 'Invalid Date') {
        res.json({ error : "Invalid Date" })
        return;
    }

    const unixDate = date.getTime();
    const utcDate = date.toUTCString()
    res.json({unix: unixDate, utc: utcDate})
})

app.get('/api/', (_req, res)=> {
    const date = new Date()

    const unixDate = date.getTime();
    const utcDate = date.toUTCString()
    
    res.json({unix: unixDate, utc: utcDate})
})

module.exports = app
