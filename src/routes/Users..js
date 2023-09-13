import express from 'express'
import { CreateUser,} from '../controllers/userController.js'
import { validateUserReg } from '../validators/userValidator.js'

const usersRouter = express.Router()

usersRouter.get('/register-user' ,validateUserReg, registerUser)
usersRouter.get('/login' , loginUser)


export default usersRouter