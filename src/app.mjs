import express from "express";
import { port } from "./config/config.js";
import connectDb from "./config/db.js";

import chalk from "chalk";

const PORT = port || 3000

const app = express()

connectDb()

app.listen(PORT, () => console.log(`${chalk.green.bold('Server')} is Running on port  ${chalk.green.bold(PORT)}`))