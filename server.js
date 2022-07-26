const express = require('express');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/api/movies', (req, res) => {
console.log('test movie route')
  
});

app.post('/api/add-movie', (req, res) => {
    console.log('adding a movie????')
})

app.put('/api/update-review', (req, res) => {
    console.log('testing update review')
})


app.delete('/api/movie/:id', (req, res) => {
  console.log('delete test of movie id')
})

app.get('/api/movies', (req, res) => {
   console.log('get route movie test')
})


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);