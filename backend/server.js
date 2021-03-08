const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const dbConfig = require('./database/db')
const PORT = process.env.PORT || 5500


//Express Route
const StudentRoute = require('./routes/studentRoute')

//Connect to MongoDB
connectDB = async () => {
  try {
    await mongoose.connect(dbConfig.db, {useFindAndModify: true, useNewUrlParser: true, useUnifiedTopology: true})
    console.log('Successfully connected to MongoDB')
  }
  catch(err) {
    console.log(err)
  }
}
connectDB()

app.use(express.json())
app.use(cors({origin: true, credentials: true}))
app.use('/students', StudentRoute)

// 404Error 
app.use((req, res, next) => {
  next(createError(404))
})

app.use(function(err, req, res, next) {
  console.error(err.message)
  if(!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))