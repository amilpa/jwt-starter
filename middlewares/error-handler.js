const { CustomAPIError } = require('../errors/index')
const statusCodes = require('http-status-codes')

const handleError = (err,req,res,next) => {
  if(err instanceof CustomAPIError)
  {
    return res.status(err.statusCode).json({ message : err.message })
  }
  return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ message : "Something went wrong" })
}

module.exports = handleError 