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

// Do we need these? Are we using JSON data for our seeds?
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) => {
  console.info('GET /');
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

// GET Route for api info
app.get('/api/movies', (req, res) => {
  console.log("GET /api/movies");
//   Are we taking JSON data or seed data? How are we making these two communicate if both?
//   var dbObj = JSON.parse(fs.readFileSync(dbPath));
//   res.json(dbObj);
});

app.get('./api/add-movie', (req, res) => {
    // res.json(again r we using json or seeds?? is this useful?);
})

app.post('./api/add-movie', (req, res) => {
    // add a movie -- how?? 
})

app.get('./api/update-review', (req, res) => {
    // updates a movie?? again what does this mean/ expect? do we need a get and post?
})

app.get('./api/movie/:id', (req, res) => {
    // dk if this is a get actually since it needs to delete a route??
})

// GET Route for anything else to force to homepage
app.get('*', (req, res) => {
  console.log("GET *");
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

// Set up the listener to host
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);