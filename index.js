const express = require("express")
const server = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// Connecting to the mongoose
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/login-credential-manager');
  console.log("Login-credential-manager database connected.....");
}


// Making Schema (Make sure this is written above apis and all the middel ware)
const UserSchema = new mongoose.Schema({
    username: String,
    phoneNumber : Number,
    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
      },
      password : String 
  });


//   Making modal from the schema
const UserDetails = mongoose.model('UserDetails', UserSchema);


// Middel-ware
server.use(cors())
server.use(bodyParser.json())

// Home GET API
server.get("/", (req, res) => {
    res.send("Server is Running")
})


// GET API for view all
server.get("/demo",async(req,res)=>{
    let docs = await UserDetails.find({})
    res.json(docs)
    console.log(docs);
})

// POST API
server.post("/demo", async (req, res) => {
    let details = new UserDetails()
    details.username = req.body.username
    details.phoneNumber = req.body.phoneNumber
    details.email = req.body.email
    details.password = req.body.password
    let doc = await details.save()
    res.json(doc)    
    console.log(doc);
    
})



server.listen(8080, () => {
    console.log("Server is running on 8080 port");
})