const express =  require('express')

const servicesRouter = express.Router();
const services = require('../models/services')

// // EDIT => GET
// app.get('/spongebob/:id/edit', (req, res) => {
//     Data.findById(req.params.id, (err, bikBottom) => {
//         res.render('edit.ejs', {
//             data : bikBottom
//         });
//     });
// });

// //INDEX

// app.get('/spongebob', (req, res) => {
//   Data.find({}, (error, allSponge) => {
//          res.render('index.ejs', {
//              data: allSponge
//          });
//      })
//  });

//  //NEW
//  app.get('/spongebob/new', (req, res) => {
//      res.render('new.ejs');
//  })


// //SHOW
//  app.get('/spongebob/:id', (req, res) => {
//  Data.findById(req.params.id, (error, character) => {
//      res.render('show.ejs',
//      {list: character})
//  })
//  })

// //POST
// app.post('/spongebob', (req, res) => {
//   Data.create(req.body, (error, createdBottom) => {
//     res.redirect('/spongebob')
//   })
// })

//  // UPDATE => PUT
//  app.put('/spongebob/:id', (req, res)=>{
//      Data.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
//          // console.log(req.body)
//          // res.send(updatedModel);
//          res.redirect('/spongebob');
//      });
//  });


//  // DESTROY => DELETE
//  app.delete('/spongebob/:id', (req, res) => {
//      Data.findByIdAndRemove(req.params.id, (err, data)=> {
//          res.redirect('/Spongebob');
//      });
//  });


module.exports = servicesRouter