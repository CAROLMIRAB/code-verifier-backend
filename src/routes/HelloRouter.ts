import express, { Request, Response, json } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";
//const { json } = require('express');
import Joi from 'joi';



//Router from express 
let helloRouter = express.Router();


//http://localhost:8000/api/hello?name=Martin/
helloRouter.route('/')
  .get(async (req: Request, res: Response) => {
    let name: any = req?.query?.name
    LogInfo(`Query Param: ${name}`)
    //Controller instance
    const controller: HelloController = new HelloController()
    const response = await controller.getMessage(name)

    return res.send(response)

  })

const payloadSchema = Joi.object().keys({
  name: Joi.string().required().max(32),
  age: Joi.number().required().min(16)
})

const save = () => {
  return {}
}



helloRouter.route('/payload')
  .post(async (req: Request, res: Response) => {
    const { error, value } = payloadSchema.validate(req.body);
    console.log(req.body)
    if (error) {
      res.status(400).json({ error: error.details[0].message })
    } else {
      let response = save();
      res.status(201).json(response)
    }

  })





export default helloRouter