const express =  require('express')
const productsRouter = express.Router();
const products = require('../models/products')


// EDIT => GET
productsRouter.get('/products/:id/edit', (req, res) => {
    Data.findById(req.params.id, (err, allProducts) => {
        res.render('edit.ejs', {
            products : allProducts
        });
    });
});

//INDEX

productsRouter.get('/products', (req, res) => {
  Data.find({}, (error, allProducts) => {
         res.render('shop.ejs', {
             data: allProducts
         });
     })
 });

 //NEW
 productsRouter.get('/products/new', (req, res) => {
     res.render('new.ejs');
 })


//SHOW
 productsRouter.get('/products/:id', (req, res) => {
 Data.findById(req.params.id, (error, character) => {
     res.render('show.ejs',
     {list: character})
 })
 })

//POST
productsRouter.post('/products', (req, res) => {
  Data.create(req.body, (error, createdBottom) => {
    res.redirect('/products')
  })
})

 // UPDATE => PUT
 productsRouter.put('/products/:id', (req, res)=>{
     Data.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
         // console.log(req.body)
         // res.send(updatedModel);
         res.redirect('/products');
     });
 });


 // DESTROY => DELETE
 productsRouter.delete('/products/:id', (req, res) => {
     Data.findByIdAndRemove(req.params.id, (err, data)=> {
         res.redirect('/products');
     });
 });



module.exports = productsRouter;