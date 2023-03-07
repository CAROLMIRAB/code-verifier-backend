import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"

dotenv.config()

const app: Express = express()
const port: string | number = process.env.PORT || 8000

app.get('/', (req: Request, res: Response) => {

  res.send('Welcome to my API Restfull: Express + TS + Nodemon + Jest + Swagger + Mongoose')
})

app.get('/get', (req: Request, res: Response) => {
  res.status(200).json({ "data": { "message": "Goodbye, world" } });

})

app.get('/hello', (req: Request, res: Response) => {
  let name = req.query.name === undefined ? 'anonimo' : req.query.name;
  res.status(200).json({ "data": { "message": `Hola, ${name}` } });

})


app.listen(port, () => console.log(`The server is running on port http://localhost:${port}`));