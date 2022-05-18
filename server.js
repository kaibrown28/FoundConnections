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
const productRoutes = require('./routes/productRoutes')
// const serviceRoutes = require('./routes/serviceRoutes')
const services = require('./models/services')

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
// app.use(serviceRoutes)
app.use(productRoutes)

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
app.get('/appointments', (req, res) => {
  services.find({}, (error, allServices) => {
         res.render('appointments.ejs', {
             services: allServices,
             tabTitle: "Make an Appointment",
         });
     })
  });



// EDIT => GET
app.get('/:id/editService', (req, res) => {
  services.findById(req.params.id, (err, editService) => {
      res.render('editService.ejs', {
          services : editService,
          tabTitle: "Change Appointment"
      });
  });
});

//INDEX


app.get('/checkOrder', (req, res) => {
services.find({}, (error, checkOrder) => {
       res.render('checkorder.ejs', {
           services: checkOrder,
           tabTitle: "Check an Order",
       });
   })
});
app.get('/editService', (req, res) => {
services.find({}, (error, editService) => {
       res.render('editService.ejs', {
           services: editService,
           tabTitle: "Change an Appointment",
       });
   })
});

//NEW
app.get('/appointments', (req, res) => {
   res.render('appointments.ejs');
})

//SHOW
app.get('/services/:id', (req, res) => {
services.findById(req.params.id, (error, services) => {
   res.render('checkOrder.ejs',
   {services: services})
})
})

//CREATE
app.post('/', (req, res) => {
  servicesSchema.create(req.body, (error, createdService) => {
    res.redirect('/')
  })
})

// UPDATE => PUT
app.put('/:id', (req, res)=>{
   servicesSchema.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedAppointment)=>{     
       res.redirect('/');
   });
});


// DESTROY => DELETE
app.delete('/:id', (req, res) => {
   services.findByIdAndRemove(req.params.id, (err, services)=> {
       res.redirect('/');
   });
});

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