const statusCodes = require('http-status-codes')
const { CustomAPIError } = require('./custom-error')

class BadRequest extends CustomAPIError{
  constructor(message)
  {
    super(message)
    this.statusCode = statusCodes.BAD_REQUEST
  }
}

module.exports = { BadRequest }