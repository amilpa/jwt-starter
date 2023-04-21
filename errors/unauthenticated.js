const statusCodes = require('http-status-codes')
const { CustomAPIError } = require('./custom-error')

class Unauthenticated extends CustomAPIError{
  constructor(message)
  {
    super(message)
    this.statusCode = statusCodes.UNAUTHORIZED
  }
}

module.exports = { Unauthenticated }