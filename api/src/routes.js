import { Router } from 'express'
import MessageController from './controllers/MessageController'

const routes = Router()

routes.get('/message', MessageController.index)
routes.post('/message', MessageController.store)

export default routes