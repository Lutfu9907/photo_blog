// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// //connect DB
// mongoose.connect('mongodb://localhost/pcat-test-db');

// //creat schema
// const PhotoSchema = new Schema({
//   title: String,
//   description: String,
// });

// const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
// Photo.create({
//     title:"Photo Title 2",
//     description:"Photo description 2 lorem ipsum,"
// });

//read a photo
// Photo.find({})
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(err=>{
//         console.log(err);
//     })

//update a photo
// const id="66f6d3d0e649ce5a7a792872";

// Photo.findByIdAndUpdate(
//     id,
//     {
//         $set:{title:'updated photo 1',description:'updated description'}
//     },
//     {
//         new:true,
//     })
//     .then(updatedDocument => {
//         console.log('updated document:', updatedDocument);
//     })
//     .catch(err => {
//         console.error('Error:', err);
//     });


// //delete a photo
// const id = '66f6d5c4048c811b1334198b';

// Photo.findByIdAndDelete(id)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
