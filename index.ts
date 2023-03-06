import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"

dotenv.config()

const app: Express = express()
const port: string | number = process.env.PORT || 8000

app.get('/', (req: Request, res: Response) => {

  res.send('Welcome to my API Restfull: Express + TS + Nodemon + Jest + Swagger + Mongoose')
})

app.get('/hello', (req: Request, res: Response) => {
  res.send('hello world')
})

app.listen(port, () => console.log(`The server is running on port ${port}`));