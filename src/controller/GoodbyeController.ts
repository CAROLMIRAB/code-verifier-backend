import { GoodbyeResponse } from "./types";
import { IGoodbyeController, IHelloController } from "./interfaces";
import { LogSuccess } from "../utils/logger";
import express, { Request, Response } from 'express';

export class GoodbyeController implements IGoodbyeController {

  public async getMessage(name?: string | undefined): Promise<GoodbyeResponse> {
    LogSuccess('[/api/hello] Get Request')
    return {
      message: `Goodbye, ${name || "World"}`,
      date: new Date()
    }


  }

}