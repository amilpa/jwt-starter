require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()


const mainRouter = require('./routes/main-router')

const notFound = require('./middlewares/not-found')
const handleError = require('./middlewares/error-handler')

//middlewares
app.use(express.json())
app.use(express.static('./public'))

//routes
app.use('/api/v1',mainRouter)

app.use(notFound)
app.use(handleError)

const port = process.env.PORT || 3000

const start = async() => {
  try {
    app.listen(port , () => console.log(`Server listening on port ${port}`))
  } catch (error) {
    console.log(error.message)
  }
}

start()