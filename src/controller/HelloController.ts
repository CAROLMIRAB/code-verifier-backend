import { Get, Query, Route, Tags } from "tsoa"
import { BasicResponse } from "./types"
import { IHelloController } from "./interfaces"
import { LogSuccess } from "../utils/logger"
import express, { Request, Response } from 'express'

@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IHelloController {

  /**
   * Endpoint to retrieve a Message "Hello {name} in json"
   * @param {string | undefined} name Name of user to be greated
   * @returns {BasicResponse} Promise of basic response
   */
  @Get("/")
  public async getMessage(@Query() name?: string | undefined): Promise<BasicResponse> {
    LogSuccess('[/api/hello] Get Request')
    return {
      message: `Hello, ${name || "World"}`
    }


  }

}