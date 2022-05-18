const express =  require('express')
const productsRouter = express.Router();
const products = require('../models/products')


// EDIT => GET
productsRouter.get('/products/:id/edit', (req, res) => {
    products.findById(req.params.id, (err, allProducts) => {
        res.render('editService.ejs', {
            products : allProducts,
            tabTitle: "Edit an Appointment"
        });
    });
});

//INDEX

productsRouter.get('/shop', (req, res) => {
  products.find({}, (error, allProducts) => {
         res.render('shop.ejs', {
             products: allProducts,
             tabTitle: "All Products"
         });
     })
 });

 //SHOP ROUTES
productsRouter.get('/atari', (req, res) => {
  products.find({company: "Atari"}, (error, atariProducts) => {
         res.render('atari.ejs', {
             products: atariProducts,
             tabTitle: "Shop Atari"
         });
     })
 });
productsRouter.get('/nintendo', (req, res) => {
  products.find({company: "Nintendo"}, (error, nintendoProducts) => {
         res.render('nintendo.ejs', {
             products: nintendoProducts,
             tabTitle: "Shop Nintendo"
         });
     })
 });
productsRouter.get('/sega', (req, res) => {
  products.find({company:"Sega"}, (error, segaProducts) => {
         res.render('sega.ejs', {
             products: segaProducts,
             tabTitle: "Shop Sega"
         });
     })
 });
productsRouter.get('/sony', (req, res) => {
  products.find({company: "Sony"}, (error, sonyProducts) => {
         res.render('sony.ejs', {
             products: sonyProducts,
             tabTitle: "Shop Sony"
         });
     })
 });
productsRouter.get('/cart', (req, res) => {
  products.find({}, (error, shoppingCart) => {
         res.render('cart.ejs', {
             products: shoppingCart,
             tabTitle: "Shopping Cart"
         });
     })
 });
productsRouter.get('/checkout', (req, res) => {
  products.find({}, (error, checkout) => {
         res.render('checkout.ejs', {
             products: checkout,
             tabTitle: "Checkout Page"
         });
     })
 });


 //NEW
//  productsRouter.get('/products/new', (req, res) => {
//      res.render('new.ejs');
//  })


// SHOW
 productsRouter.get('/index/:id', (req, res) => {
 products.findById(req.params.id, (error, product) => {
     res.render('showProduct.ejs',
     {  products: product,
        tabTitle: "Shop Item"})
 })
 })

// POST
productsRouter.post('/products', (req, res) => {
  products.create(req.body, (error, addToCart) => {
    res.redirect('/cart')
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


//  DESTROY => DELETE
//  productsRouter.delete('/:id', (req, res) => {
//      products.findByIdAndRemove(req.params.id, (err, products)=> {
//          res.redirect('/products');
//      });
//  });



module.exports = productsRouter;