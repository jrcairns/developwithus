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

Route.get('listing/:slug', 'ListingController.find');

Route.group(() => {
  Route.post("register", "Auth/AuthenticationController.register");
  Route.post("login", "Auth/AuthenticationController.login");
  Route.get("me", "Auth/AuthenticationController.me").middleware(["auth"]);
}).prefix("api");