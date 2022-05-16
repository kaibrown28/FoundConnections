const express =  require('express')

const servicesRouter = express.Router();
const services = require('../models/services')

// EDIT => GET
servicesRouter.get('/services/:id/edit', (req, res) => {
    Data.findById(req.params.id, (err, editService) => {
        res.render('edit.ejs', {
            services : editService
        });
    });
});

//INDEX

servicesRouter.get('/services', (req, res) => {
  Data.find({}, (error, services) => {
         res.render('appointments.ejs', {
             services: allServices
         });
     })
 });

 //NEW
 servicesRouter.get('/services/new', (req, res) => {
     res.render('appointments.ejs');
 })


//SHOW
 servicesRouter.get('/services/:id', (req, res) => {
 Data.findById(req.params.id, (error, character) => {
     res.render('checkOrder.ejs',
     {list: character})
 })
 })

//POST
servicesRouter.post('/services', (req, res) => {
  Data.create(req.body, (error, createdService) => {
    res.redirect('/services')
  })
})

 // UPDATE => PUT
 servicesRouter.put('/services/:id', (req, res)=>{
     Data.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedAppointment)=>{
         // console.log(req.body)
         // res.send(updatedModel);
         res.redirect('/appointments');
     });
 });


 // DESTROY => DELETE
 servicesRouter.delete('/services/:id', (req, res) => {
     Data.findByIdAndRemove(req.params.id, (err, data)=> {
         res.redirect('/services');
     });
 });


module.exports = servicesRouter;