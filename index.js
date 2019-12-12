const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const catsRoutes = require('./routes/cats');
const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.urlencoded({extended:true}));

app.use(catsRoutes);
async function start(){
  try {
    await mongoose.connect('mongodb+srv://Burnyaxa:admin1337@cluster0-s4uhh.mongodb.net/cats', {
      useNewUrlParser: true,
      useFindAndModify: false
    });
    app.listen(PORT, () => {
        console.log('Server running at ' + PORT);
    });
  }
  catch (e) {
    console.log(e);
  }
}

start();
