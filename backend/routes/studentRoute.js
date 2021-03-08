const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

//Student Model
const StudentModel = require('../models/Student')


//Create Student
router.route('/create-student')
  .post( async (req, res, next) => {
    try {
      const response =  await StudentModel.create(req.body)
      res.json(response)
    }
    catch(err) {
      next(err)
    }
  })


//Read Student  
router.route('/')
  .get( async (req, res, next) => {
    try {
      const data = await StudentModel.find()
      res.json(data)
    }
    catch(err) {
      next(err) 
    }
  })

//Get single student
router.route('/edit-student/:id')
      .get( async (req, res) => {
        try {
          const data = await StudentModel.findById(req.params.id)
          res.json(data)
        }
        catch(err) {
          console.log(err)
        }
      })


//Update Student
router.route('/update-student/:id')
  .put(async (req, res, next) => {
    try {
      const data = await StudentModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
      })
      res.json(data)
      console.log('Student updated successfully...')
    }
    catch(err) {
      next(err)
    }
  })  


//Delete Student
router.route('/delete-student/:id')
  .delete( async (req, res, next) => {
    try {
      const response =  await StudentModel.findByIdAndDelete(req.params.id)
      res.status(200).json(response)
    }
    catch(err) {
      next(err)
    }
  })


module.exports = router