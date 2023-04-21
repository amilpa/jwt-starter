
const jwt = require('jsonwebtoken')
const { Unauthenticated,BadRequest } = require('../errors/index')

const authenticationMiddleware = (req,res,next) => {
  const authHeader = req.headers.authorization

  if(!authHeader || !authHeader.startsWith('Bearer '))
  {
    throw new Unauthenticated('No token provided')
  }

  const token = authHeader.split(' ')[1]

  try{
    const { id , userName } = jwt.verify(token,process.env.JWT_SECRET)
    req.user = { id,userName }
    next()
  }
  catch{
    throw new Unauthenticated('Not authorized to access this route')
  }
}

module.exports = authenticationMiddleware