//Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const authorsController = require('./controllers/authors.js');

//Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use('/authors', authorsController);

//Index Route
app.get('/', (req, res)=>{
  res.render('index.ejs')
});

//Connections
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
mongoose.connect(mongoUri);

mongoose.connection.once('open', ()=>{
  console.log('mongo in the house');
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log('grr. argh.');
  console.log('---------------------------------');
  console.log('Server running on port: ' + port);
  console.log('---------------------------------');
});
