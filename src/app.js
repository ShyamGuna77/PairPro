const express = require("express");
const User = require("./models/user"); // Ensure this file exists and is correctly implemented
const connectDB = require("./config/database");

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const data = req.body;
  console.log(data);

  try {
    const user = new User(data);
    await user.save();
    console.log(user);

    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    console.error("Signup Error:", err.message);
    res
      .status(400)
      .json({ message: "Error creating user", error: err.message });
  }
});

// Ensuring database connection is properly handled
(async () => {
  try {
    await connectDB();
    console.log("Database connected successfully");
    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    });
  } catch (err) {
    console.error("Failed to connect to the database:", err.message);
    process.exit(1); // Stop the process if DB connection fails
  }
})();
