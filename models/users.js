const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name : {
    type : String,
    required : [true,'Username is required']
  }
})

module.exports = mongoose.model('users',userSchema)