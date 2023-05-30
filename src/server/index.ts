import express, { Express, Response, Request } from "express";
import dotenv from 'dotenv'

import cors from 'cors'
import helmet from 'helmet'
import rootRouter from '../routes'
import mongoose, { Schema, model, connect } from 'mongoose';

import Joi from 'joi';

dotenv.config();

const server: Express = express();
const port: string | number = process.env.PORT || 8000

// Define SERVER to use "/api" and use rootRouter 
server.use('/api', rootRouter)

// TODO: Mongoose Connection 

// Security Config
server.use(helmet())
server.use(cors())

//content Type:
server.use(express.urlencoded({ extended: true, limit: '50mb' }))

server.use(express.json({ limit: '50mb' }))

//http://localhost:8000 --> http://localhost:8000/api/
server.get('/', (req: Request, res: Response) => {
  res.redirect('/api')
})

export default server