'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// make route group with prefix /api/v1
Route.group('/api/v1/auth', () => {
  Route.post('login', 'AuthController.login')
  Route.post('register', async ({request}) =>{
    return {
      message: 'Hello World',
    }
  })
  Route.post('forgot-password', 'AuthController.forgotPassword')
  Route.post('reset-password', 'AuthController.resetPassword')
}).prefix('/api/v1/auth')
