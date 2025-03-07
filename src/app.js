const express = require("express");
const User = require("./models/user");
const app = express();
const connectDB = require("./config/database");

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Dhoni",
    lastName: "Prasad",
    emailID: "Kohli2001@gmail.com",
    passWord: "Kohli1234",
  };

  try {
    const user = new User(userObj);
    await user.save();

    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(401).json({ message: "Error creating user" });
  }
});

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
