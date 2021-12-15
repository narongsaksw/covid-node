import { Express, Request, Response } from 'express'

import { createUserHandler, getAllUsersHandler, deleteTimelineHandler } from './controllers/user.controller'


function routes(app: Express) {
    app.post('/api/users',createUserHandler)
    app.get('/api/users',getAllUsersHandler)
    app.delete('/api/users/:citizenId/timelines/:timelineId',deleteTimelineHandler)
}

export default routes