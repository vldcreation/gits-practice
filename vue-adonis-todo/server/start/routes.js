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
Route.group('/api/v1', () => {
  Route.post('auth/login', 'UserController.login')
  Route.post('auth/register', 'UserController.register')
  Route.post('auth/forgot-password', 'AuthController.forgotPassword')
  Route.post('auth/reset-password', 'AuthController.resetPassword')

  // projects
  Route.get('projects', 'ProjectController.index')
    .middleware('auth')
  Route.post('projects', 'ProjectController.create')
    .middleware('auth')
  Route.delete('projects/:id', 'ProjectController.destroy')
    .middleware('auth')
  Route.patch('projects/:id', 'ProjectController.update')
    .middleware('auth')
}).prefix('/api/v1')
