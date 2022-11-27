//setup express and mongoose
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const fs = require('fs');
const path = require('path');
require('dotenv/config');

// //conect to db
// mongoose.connect("mongodb+srv://rcabrera:MXXmaW4fygwOPEL7@cluster0.dxdojym.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
//   if (!err) console.log('db connected');
//   else console.log('db error');
// })

// // Step 3 - code was added to ./model.js

// // Step 4 - set up EJS
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json())

// Express Middleware for serving static files
app.use(express.static(path.join(__dirname, '/')));
console.log('thumbs up');


// // Set EJS as templating engine 
// app.set("view engine", "ejs");

// // Step 5 - set up multer for storing uploaded files
// var multer = require('multer');

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// });

// var upload = multer({ storage: storage });

// // Step 6 - load the mongoose model for Image
// // create data schema and load model
// const starSchema = new mongoose.Schema({
//   name: String,
//   // rating: Number,
//   desc: String,
//   img: {
//     data: Buffer,
//     contentType: String
//   }
// });
// const imgModel = new mongoose.model("stars", starSchema);
// console.log('image model loaded');

// //Step 7 - the GET request handler that provides the HTML UI  
// //GET - get List of Images
// app.get('/', function(req, res) {
//   imgModel.find({}, (err, items) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('An error occurred', err);
//     }
//     else {
//       res.render('#bank', { items: items });
//     }
//   });
  
//   res.redirect('/');
// });

// // Step 8 - the POST handler for processing the uploaded file 
// // POST - upload a File/Image
// app.post('/', upload.single('image'), (req, res, next) => {
//   var obj = {
//     name: req.body.name,
//     desc: req.body.desc,
//     img: {
//       //data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//       contentType: 'image/png'
//     }
//   }
//   imgModel.create(obj, (err, item) => {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       // item.save();
//       console.log('post success');
//       res.redirect('/');
//     }
//   });
// });

// const data = new newModel({name:obj.name, rating: 4, info: obj.desc, img: ''});
// data.save();
// console.log('document added');

// Step 9 - configure the server's port

// var port = process.env.PORT || '3000'
// app.listen(port, err => {
//     if (err)
//         throw err
//     console.log('Server listening on port', port)
// })
app.listen(3000, () => (console.log('connection listen on 3000')))

//
// npm start / http server stuff

// // declare writable global variables:
// let html;
// let css;
// let bankjs;
// let cardjs;
// let rowjs;
// let formjs;

// // use fs.readFile to assign the global variables above:
// fs.readFile('index.html', function (err, data) {
//   if (err) {
//     throw err;
//   }
//   html = data;
// });
// fs.readFile('stylesheet.css', function (err, data) {
//   if (err) {
//     throw err;
//   }
//   css = data;
// });
// fs.readFile('bank.js', function (err, data) {
//   if (err) {
//     throw err;
//   }
//   bankjs = data;
// });
// fs.readFile('cards.js', function (err, data) {
//   if (err) {
//     throw err;
//   }
//   cardjs = data;
// });
// fs.readFile('rows.js', function (err, data) {
//   if (err) {
//     throw err;
//   }
//   rowjs = data;
// });
// fs.readFile('form.js', function (err, data) {
//   if (err) {
//     throw err;
//   }
//   formjs = data;
// });
// // create the server - look to see if the request url contains either CSS or Javascript, and return the appropriate information: 
// http.createServer((req, res) => {
//   res.statusCode = 200;
//   if (req.url.indexOf('.css') != -1) {
//     res.writeHead(200, { 'Content-Type': 'text/css' });
//     res.write(css);
//     res.end();
//     console.log('css success');
//     return;
//   }
//   if (req.url.indexOf('/bank.js') != -1) {
//     res.writeHead(200, { 'Content-Type': 'text/javascript' });
//     res.write(bankjs);
//     res.end();
//     console.log('bank success');
//     return;
//   }
//   if (req.url.indexOf('/cards.js') != -1) {
//     res.writeHead(200, { 'Content-Type': 'text/javascript' });
//     res.write(cardjs);
//     res.end();
//     console.log('card success');
//     return;
//   }
//   if (req.url.indexOf('/rows.js') != -1) {
//     res.writeHead(200, { 'Content-Type': 'text/javascript' });
//     res.write(rowjs);
//     res.end();
//     console.log('row success');
//     return;
//   }
//   if (req.url.indexOf('/form.js') != -1) {
//     res.writeHead(200, { 'Content-Type': 'text/javascript' });
//     res.write(formjs);
//     res.end();
//     console.log('form success');
//     return;
//   }
//   res.writeHeader(200, { "Content-Type": "text/html" });
//   res.write(html);
//   res.end();
// }).listen(3000);