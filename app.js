require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const route = require('./route');

app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use('/CyberCity', route);

app.get('/', (req, res) => {
  res.redirect('/CyberCity/comics/1');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started ');
});
