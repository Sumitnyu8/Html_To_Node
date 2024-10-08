const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

const viewsPath = path.join(__dirname, 'view');
app.set('views', viewsPath);

app.set('view engine', 'ejs');

app.use('/css', express.static(path.join(__dirname, 'view/css')));
app.use('/images', express.static(path.join(__dirname, 'view/images')));
app.use('/fonts', express.static(path.join(__dirname, 'view/fonts')));
app.use('/extra', express.static(path.join(__dirname, 'view/extra')));
app.use('/js', express.static(path.join(__dirname, 'view/js')));

app.use((req, res, next) => {
  console.log(`Request for ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/About', (req, res) => {
  res.render('About'); 
});

app.get('/Team', (req, res) => {
  res.render('Team'); 
});

app.use((req, res, next) => {
  res.status(404).send('Sorry, we cannot find that!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
