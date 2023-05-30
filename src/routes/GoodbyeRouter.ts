import express, { Request, Response, json } from "express";
import { GoodbyeController } from "../controller/GoodbyeController";
import { LogInfo } from "../utils/logger";

//Router from express 
let goodbyeRouter = express.Router();


//http://localhost:8000/api/hello?name=Martin/
goodbyeRouter.route('/')
  .get(async (req: Request, res: Response) => {
    let name: any = req?.query?.name
    LogInfo(`Query Param: ${name}`)
    //Controller instance
    const controller: GoodbyeController = new GoodbyeController()
    const response = await controller.getMessage(name)

    return res.send(response)

  })





export default goodbyeRouter