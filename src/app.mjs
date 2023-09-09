import express from "express";
import { port } from "./config/config.js";
import connectDb from "./config/db.js";

import chalk from "chalk";
// import { hellWorld } from "./controllers/userController.js";
import usersRouter from "./routes/Users..js";
import postRouter from "./routes/posts.js";

const PORT = port || 3000

const app = express()
app.use(express.json())

// ap.use(express.static('./public'))
app.use('/api/v1/users',usersRouter)
app.use('/api/v1/posts' , postRouter)

connectDb()

app.listen(PORT, () => console.log(`${chalk.green.bold('Server')} is Running on port  ${chalk.green.bold(PORT)}`))