import express, { Request, Response } from "express";
import { HelloController } from "@/controller/HelloController";
import { LogInfo } from "@/utils/logger";

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

export default helloRouter