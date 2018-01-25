//Dependencies
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');


//Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

//Index Route
app.get('/', (req, res)=>{
  res.render('index.ejs')
});

//Server
app.listen(3000, ()=>{
  console.log('grr. argh.');
})
