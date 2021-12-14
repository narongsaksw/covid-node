import { Express, Request, Response } from 'express'

import { createUserHandler, getAllUsersHandler } from './controllers/user.controller'


function routes(app: Express) {
    app.post('/api/users',createUserHandler)
    app.get('/api/users',getAllUsersHandler)
}

export default routes