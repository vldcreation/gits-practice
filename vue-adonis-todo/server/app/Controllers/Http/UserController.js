'use strict'
const User = use('App/Models/User')
const Hash = use('Hash')
class UserController {
    async login({ request, response, auth }) {
        const { email, password } = request.all()
        const token = await auth.attempt(email, password)
        return token
    }
    async register({ request, response }) {
        const { email, password } = request.all();
        const user = await User.create({
            email,
            username : email,
            password
        });
        return user;
    }
}

module.exports = UserController
