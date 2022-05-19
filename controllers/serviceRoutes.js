const express =  require('express')

const servicesRouter = express.Router();
const services = require('../models/services')




//CREATE
servicesRouter.post('/appointments/', (req, res) => {
    services.create(req.body, (error, createdService) => {
      res.send(createdService)
    })
  })

// EDIT => GET
servicesRouter.get('/:id/editService', (req, res) => {
    services.findById(req.params.id, (err, editService) => {
        res.render('editService.ejs', {
            services : editService,
            tabTitle: "Change Appointment"
        });
    });
  });

//INDEX

servicesRouter.get('/appointments', (req, res) => {
  services.find({}, (error, allServices) => {
         res.render('appointments.ejs', {
             services: allServices,
             tabTitle: "Make an Appointment",
         });
     })
 });
servicesRouter.get('/checkorder', (req, res) => {
  services.find({}, (error, checkOrder) => {
         res.render('checkorder.ejs', {
             services: checkOrder,
             tabTitle: "Check an Order",
         });
     })
 });
servicesRouter.get('/editService', (req, res) => {
  services.find({}, (error, editService) => {
         res.render('editService.ejs', {
             services: editService,
             tabTitle: "Change an Appointment",
         });
     })
 });

 
 //NEW
 servicesRouter.get('/appointments', (req, res) => {
     res.render('appointments.ejs',{
         tabTitle:"Appointments"
     });
 })

//SHOW
 servicesRouter.get('/index/:id/', (req, res) => {
 services.findById(req.params.id, (error, services) => {
     res.render('editAppointment.ejs',
     {services: services,
    tabTitle: "Edit an Appointment"})
 })
 })

//CREATE
servicesRouter.post('/', (req, res) => {
    services.create(req.body, (error, createdService) => {
      res.redirect('/')
    })
  })

 
 servicesRouter.get('/:id/editservice', (req, res)=>{
    services.findByIdAndUpdate(req.params.id, req.body, (err, updatedAppointment)=>{
        res.render(
            'editservice.ejs',
            {
                appointment: updatedAppointment
            }
        )
    });
});

// UPDATE => PUT
servicesRouter.put('/:id', (req, res)=>{
    services.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedAppointment)=>{
        res.redirect('/appointments');
    });
});

// DESTROY => DELETE
servicesRouter.delete('/:id', (req, res) => {
    services.findByIdAndRemove(req.params.id, (err, services)=> {
        res.redirect('/');
    });
 });


module.exports = servicesRouter;