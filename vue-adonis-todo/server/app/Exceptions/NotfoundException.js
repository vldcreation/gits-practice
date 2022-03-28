'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class NotfoundException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    return response.status(404).json({
      code : 404,
      error: 'Not Found',
      message: 'The resource you are looking for was not found',
    })
  }
}

module.exports = NotfoundException
