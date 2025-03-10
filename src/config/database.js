

const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect(
      "mongodb+srv://Shyam:Shyamprasad7d@cluster0.5bdd4.mongodb.net/Tinder"
    );

}

module.exports = connectDB

