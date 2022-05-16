const express =  require('express')
const productsRouter = express.Router();
const products = require('../models/products')


// EDIT => GET
productsRouter.get('/products/:id/edit', (req, res) => {
    products.findById(req.params.id, (err, allProducts) => {
        res.render('edit.ejs', {
            products : allProducts,
            tabTitle: "Edit an Appointment"
        });
    });
});

//INDEX

productsRouter.get('/products', (req, res) => {
  products.find({}, (error, allProducts) => {
         res.render('showProducts.ejs', {
             products: allProducts,
             tabTitle: "All Products"
         });
     })
 });

 //SHOP ROUTES
productsRouter.get('/atari', (req, res) => {
  products.find({}, (error, atariProducts) => {
         res.render('atari.ejs', {
             products: atariProducts,
             tabTitle: "Atari"
         });
     })
 });
productsRouter.get('/nintendo', (req, res) => {
  products.find({}, (error, nintendoProducts) => {
         res.render('nintendo.ejs', {
             products: nintendoProducts,
             tabTitle: "Nintendo"
         });
     })
 });
productsRouter.get('/sega', (req, res) => {
  products.find({}, (error, segaProducts) => {
         res.render('sega.ejs', {
             products: segaProducts,
             tabTitle: "Sega"
         });
     })
 });
productsRouter.get('/sony', (req, res) => {
  products.find({}, (error, sonyProducts) => {
         res.render('sony.ejs', {
             products: sonyProducts,
             tabTitle: "Sony"
         });
     })
 });


 //NEW
 productsRouter.get('/products/new', (req, res) => {
     res.render('new.ejs');
 })


//SHOW
 productsRouter.get('/products/:id', (req, res) => {
 products.findById(req.params.id, (error, character) => {
     res.render('showProducts.ejs',
     {list: character})
 })
 })

//POST
productsRouter.post('/products', (req, res) => {
  products.create(req.body, (error, createdBottom) => {
    res.redirect('/products')
  })
})

 // UPDATE => PUT
 productsRouter.put('/products/:id', (req, res)=>{
     products.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
         // console.log(req.body)
         // res.send(updatedModel);
         res.redirect('/products');
     });
 });


 // DESTROY => DELETE
 productsRouter.delete('/products/:id', (req, res) => {
     products.findByIdAndRemove(req.params.id, (err, products)=> {
         res.redirect('/products');
     });
 });



module.exports = productsRouter;