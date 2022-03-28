'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class InvalidAccessException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    return response.status(403).json({
      code : 403,
      error: 'Forbidden',
      message: 'You are not allowed to access this resource',
    })
  }
}

module.exports = InvalidAccessException
