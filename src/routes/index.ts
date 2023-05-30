/**
 * Root Router
 * Redirections to routers 
 */

import express, { Response, Request } from 'express'
import helloRouter from './HelloRouter'
import { LogInfo } from '../utils/logger'

//server instance
let server = express()



//Router instance 
let rootRouter = express.Router()

//activate for requests to http://localhost:8000/api

//GET: http://localhost:8000/api
rootRouter.get('/', (req: Request, res: Response) => {
  LogInfo('GET: http://localhost:8000/api')
  res.status(200).json({ "data": { "message": "Welcome to my api" } });
})

//Redirections to Routers & Controllers
server.use('/', rootRouter) // http://localhost:8000/api/
server.use('/hello', helloRouter)// http://localhost:8000/api/hello --> HelloRouter

//add more routes 

export default server