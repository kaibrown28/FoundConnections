const express =  require('express')

const servicesRouter = express.Router();
const services = require('../models/services')

// EDIT => GET
servicesRouter.get('/services/:id/edit', (req, res) => {
    services.findById(req.params.id, (err, editService) => {
        res.render('edit.ejs', {
            services : editService
        });
    });
});

//INDEX

servicesRouter.get('/services', (req, res) => {
  services.find({}, (error, services) => {
         res.render('appointments.ejs', {
             services: allServices,
             tabTitle: "Make an Appointment",
         });
     })
 });

 //NEW
 servicesRouter.get('/services/new', (req, res) => {
     res.render('appointments.ejs');
 })


//SHOW
 servicesRouter.get('/services/:id', (req, res) => {
 services.findById(req.params.id, (error, character) => {
     res.render('checkOrder.ejs',
     {list: character})
 })
 })

//POST
servicesRouter.post('/services', (req, res) => {
  services.create(req.body, (error, createdService) => {
    res.redirect('/services')
  })
})

 // UPDATE => PUT
 servicesRouter.put('/services/:id', (req, res)=>{
     services.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedAppointment)=>{
         // console.log(req.body)
         // res.send(updatedModel);
         res.redirect('/appointments');
     });
 });


 // DESTROY => DELETE
 servicesRouter.delete('/services/:id', (req, res) => {
     services.findByIdAndRemove(req.params.id, (err, services)=> {
         res.redirect('/services');
     });
 });


module.exports = servicesRouter;