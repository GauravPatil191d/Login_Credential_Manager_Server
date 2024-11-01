// This is commented typescriptm folder just uncomment it and start coding , commented to avoid the errors and before starting dont forget to import 

// npm install typescript @types/node @types/express @types/cors @types/body-parser @types/mongoose



// import express, { Request, Response } from "express";
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import mongoose, { Document, Schema } from 'mongoose';

// // Connecting to the mongoose
// const main = async () => {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/login-credential-manager');
//     console.log("Login-credential-manager database connected.....");
//   } catch (err) {
//     console.error(err);
//   }
// };

// main();

// // Define the interface for UserDetails
// interface IUserDetails extends Document {
//   username: string;
//   phoneNumber: number;
//   email: string;
//   password: string;
// }

// // Making Schema (Make sure this is written above APIs and all the middleware)
// const UserSchema: Schema = new Schema({
//   username: { type: String, required: true },
//   phoneNumber: { type: Number, required: true },
//   email: {
//     type: String,
//     required: true,
//     match: [/.+@.+\..+/, 'Please enter a valid email address']
//   },
//   password: { type: String, required: true }
// });

// // Making model from the schema
// const UserDetails = mongoose.model<IUserDetails>('UserDetails', UserSchema);

// // Middleware
// const server = express();
// server.use(cors());
// server.use(bodyParser.json());

// // Home GET API
// server.get("/", (req: Request, res: Response) => {
//   res.send("Server is Running");
// });

// // GET API for view all
// server.get("/demo", async (req: Request, res: Response) => {
//   try {
//     const docs = await UserDetails.find({});
//     res.json(docs);
//     console.log(docs);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// // POST API
// server.post("/demo", async (req: Request, res: Response) => {
//   try {
//     const details = new UserDetails({
//       username: req.body.username,
//       phoneNumber: req.body.phoneNumber,
//       email: req.body.email,
//       password: req.body.password
//     });
    
//     const doc = await details.save();
//     res.json(doc);
//     console.log(doc);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// // Start the server
// server.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });
