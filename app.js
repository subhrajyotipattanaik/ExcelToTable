var mongoose = require("mongoose");
const express = require("express");
const multer = require('multer');
const xlsx = require('xlsx');
const cors = require('cors');
const userModel = require('./models/User');


mongoose.connect("mongodb+srv://subhrajyotipattanaik57:z2rtUcTrUUjL1lFd@cluster2.ietsn0g.mongodb.net/ExcelToTable?retryWrites=true&w=majority&appName=Cluster2");

// const db = mongoose.connection;

const app = express();
var userRoute = require('./routes/userRoute');

const corsOptions = {
  origin: "http://localhost:5173",
  method: "GET,POST,PUT,DELETE,HEAD",
  credential: true,
}

app.use(cors(corsOptions));
app.use('/',userRoute)

app.post('/importUser', (req, res) => {
  // Handle the file upload and return a response
  console.log(req.body);
  res.json({ success: true, msg: 'File uploaded successfully' });
});
// --------------------------------------------
app.get('/getUser', (req, res) => {
    userModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
// ----------------------------------------------
app.listen(3000,function(){
  console.log('server is running at port')
 });