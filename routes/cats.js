const {Router} = require('express');
const cat = require('../models/cat');
const router = Router();

router.get('/', async(req, res) =>{
  const cats = await cat.find({});
  res.render('index', {
    title: 'Cat`o`pedia',
    cats
  });
});

router.get('/create', (req, res) =>{
  res.render('create', {
    title: 'Create article'
  });
});

router.post('/create', async (req, res) =>{
  const Cat = new cat({
    title: req.body.title,
    imageURL: req.body.imageURL,
    longText: req.body.longText,
    shortText: req.body.shortText
  });

  await Cat.save();
  res.redirect('/');
});

router.get('/article/:_id', async (req, res) =>{
  const Cat = await cat.findById(req.params._id);
  res.render('article', {
    title: 'Article',
    Cat
  });
});

module.exports = router;
