require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");

const app = express()
//My Routes
const authRoutes = require('./routes/auth')

//MiddleWares
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())


app.get('/', (req, res) => {
  return res.status(200).json({
    message: "ITS WORKING IN " + process.env.ENV
  })
})

//Database Connection
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log("Database Connected")
  }).catch(() => {
    console.log("Error Connecting to Database")
  })

//My Routes

app.use('/api', authRoutes)








//Port Number and Starting The Server
const port = 8000 || process.env.PORT
app.listen(port, () => {
  console.log(`Server Started on ${port}`)
})