'use strict'

const axios = require('axios')
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
const BASE_URL = 'https://api.clockify.me/api/v1/'

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/example',  async ({ request,response }) => {
  // const response = axios.get(`${BASE_URL}workspaces/623b2e4a251b272f379e51a9/users`,
  // hea
  // )
  // make get request with headers
  
  const r = await axios.get(`${BASE_URL}workspaces/623b2e4a251b272f379e51a9/users`,
    {
      headers: {
        'X-Api-Key': 'ZDU0MzJjYmQtODgyOS00MTNiLWE1NzAtYmUxODU5Njc0NDdl'
      }
    }
  )
  // save field memberships to variable in each data
  const memberships = r.data[0].memberships
  return memberships
})
