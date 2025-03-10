

const mongoose = require('mongoose')

const dataSchema =new mongoose.Schema({
   firstName : {
    type:String
   },
   lastName: { 
    type:String
   },

   emailId : {
    type:String
   },
   password: {
    type:String
   },

   age: {
    type:Number
   },
   gender : {
    type: String
   }
})

const User = mongoose.model("Data",dataSchema)

module.exports = User