const express = require("express");

const app = express();
 const connectDB = require('./config/database')


 connectDB()
   .then(() => {
     console.log("Database connected sucessfully");
     app.listen(3000, () => {
       console.log("Server Listening on 3000");
     });

   })
   .catch((err) => {
     console.log("Failed to connect Database");
   });

