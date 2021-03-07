const mongoose = require('mongoose')

let studentSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  rollno: {
    type: Number
  },
},{
  collection: 'students'
  })
  
const StudentModel = mongoose.model("Student", studentSchema)

module.exports = StudentModel