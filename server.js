const express = require('express');
const fs = require('fs');

// Sets our viewport
const PORT = process.env.PORT || 3001;

const app = express();

// Function to create a random id for each note
function uuid()
{
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) => {
  console.info('GET /');
  res.sendFile(path.join(__dirname, '/public/index.html'))
});