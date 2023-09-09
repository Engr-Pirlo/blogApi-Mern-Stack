import express from 'express'
import { CreateUser,} from '../controllers/userController.js'

const usersRouter = express.Router()

usersRouter.get('/' , CreateUser)


export default usersRouter