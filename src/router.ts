import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagContoller'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ensureAuthenticated } from './middlewares/ensureAthenticared'
import { ListUserSenderComplimentsController } from './controllers/ListUserSenderController'
import { ListUserReceiverComplimentsController } from './controllers/ListUserReceiverController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUsersController } from './controllers/ListUsersController'

const router = Router()

const createUserController = new CreateUserController()
const createTagContoller = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserSenderComplimentsController = new ListUserSenderComplimentsController()
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

router.post('/users', createUserController.hundle)
router.post(
    '/tags', 
    ensureAuthenticated, 
    ensureAdmin, 
    createTagContoller.hundle
)
router.post('/login', authenticateUserController.handle)
router.post(
    '/compliment',
    ensureAuthenticated, 
    createComplimentController.hundle
    )

router.get('/users/compliments/send', ensureAuthenticated , listUserSenderComplimentsController.handle)
router.get('/users/compliments/receive', ensureAuthenticated, listUserReceiverComplimentsController.handle)
router.get('/tags', ensureAuthenticated, listTagsController.handle)
router.get('/users', ensureAuthenticated, listUsersController.handle)

export { router }