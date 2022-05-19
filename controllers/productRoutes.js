const express =  require('express')
const productsRouter = express.Router();
const products = require('../models/products')
const cart = require('../models/cart');

// EDIT => GET
productsRouter.post('/', (req, res) => {
    servicesSchema.create(req.body, (error, createdService) => {
      res.redirect('/')
    })
  })
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
 productsRouter.get('/:id', (req, res) => {
    products.findById(req.params.id, (error, product) => {
        res.render('showProduct.ejs',
        {  products: product,
           tabTitle: "Shop Items"})
    })
    })
//  productsRouter.get('/cart/:id', (req, res) => {
//     products.findById(req.params.id, (error, addToCart) => {
//         res.render('cart.ejs',
//         {  addToCart: products,
//            tabTitle: "Shopping Cart"})
//     })
//     })

//  productsRouter.get('/cart/:id', (req, res) => {
//      var cart = new cart(req.session.cart ? req.session.cart : {products:product})
//  products.findById(req.params.id, (error, product) => {
     
//     cart.add(product, product.id);
//     req.session.cart = cart;
//     res.redirect('shop.ejs',
     
//         {tabTitle: "Shop Items"})
//  })
//  })
//  productsRouter.get('/cart/:id', (req, res) => {
//  products.findById(req.params.id, (error, product) => {
//      res.render('showProduct.ejs',
//      {  products: product,
//         tabTitle: "Shop Item"})
//  })
//  })

// POST
productsRouter.post('/cart', (req, res) => {
  cart.create(req.body, (error, addToCart) => {
    res.send(addToCart)
  })
})

 // UPDATE => PUT
 productsRouter.put('/cart/:id', (req, res)=>{
     products.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, uddToCart)=>{
         // console.log(req.body)
         // res.send(updatedModel);
         res.redirect('/cart');
     });
 });


//  DESTROY => DELETE
//  productsRouter.delete('/:id', (req, res) => {
//      products.findByIdAndRemove(req.params.id, (err, products)=> {
//          res.redirect('/products');
//      });
//  });



module.exports = productsRouter;