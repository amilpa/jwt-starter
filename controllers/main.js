const { BadRequest } = require("../errors/index")
const jwt = require('jsonwebtoken')

const login = async (req,res) => {
  const { userName , password } = req.body


  if(!userName || !password)
  {
    throw new BadRequest('Please provide email and password')
  }

  const id = new Date().getDate()
  const token = jwt.sign({id , userName}, process.env.JWT_SECRET , {
    expiresIn : '30d',
  })

  return res.status(200).send(token)
}

const dashboard = async (req,res) => {
  const luckyNumber = Math.floor(Math.random()*100)

  res.status(200).json({
    msg: `Hello ${req.user.userName}`,
    secret : `Here is your secret data:${luckyNumber}`,
  })
}

module.exports = { login,dashboard }