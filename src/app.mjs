import express from "express";
import { port } from "./config/config.js";
import connectDb from "./config/db.js";

import chalk from "chalk";

const PORT = port || 3000

const app = express()
app.use(express.json())

app.get('/' , (req,res) =>{
    return res.send('Hello World')
})

app.get('/message', (req,res) =>{
    res.send("<h1>I Love You My Mom❤️</h1")
})

connectDb()

app.listen(PORT, () => console.log(`${chalk.green.bold('Server')} is Running on port  ${chalk.green.bold(PORT)}`))