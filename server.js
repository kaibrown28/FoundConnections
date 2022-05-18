//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
require('dotenv').config()
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

/////
//Schemas and Seeds
const servicesSchema = require('./models/services.js')
const productsSchema = require('./models/products.js')
const servicesSeed = require('./models/servicesSeed')
const productsSeed = require('./models/productsSeed')
const productRoutes = require('./controllers/productRoutes')
const serviceRoutes = require('./controllers/serviceRoutes')
const cartRoutes = require('./controllers/cartRoutes')
const services = require('./models/services')
const cart = require('./models/cart.js')

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI);

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

//routers
app.use(serviceRoutes)
app.use(productRoutes)
app.use(cartRoutes)

//___________________
// Routes
//___________________
//localhost:3000

//index and event routes
app.get('/' , (req, res) => {
  res.render('index.ejs',{
    tabTitle:"Home"
  })
});

app.get('/events', (req,res)=>{
  res.render('events.ejs', {
    tabTitle: "Events"
  })
});
app.get('/stores', (req,res)=>{
  res.render('stores.ejs', {
    tabTitle: "Stores"
  })
});



// //SHOW
// app.get('/services/:id', (req, res) => {
// services.findById(req.params.id, (error, services) => {
//    res.render('checkOrder.ejs',
//    {services: services})
// })
// })



// // UPDATE => PUT
// app.put('/:id', (req, res)=>{
//    servicesSchema.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedAppointment)=>{     
//        res.send(updatedAppointment);
//    });
// });




//SEEDS

// app.get('/servicesSeed', (req,res) => {
//   servicesSchema.create(servicesSeed, (err, createData) => {
//       console.log('seed data registered!')
//   })
//   res.redirect('/')
// })

// app.get('/ProductsSeed', (req,res) => {
//   productsSchema.create(productsSeed, (err, createData) => {
//       console.log('seed data registered!')
//   })
//   res.redirect('/')
// })

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));