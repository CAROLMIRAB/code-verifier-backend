import { userEntity } from "../entities/User.entity"

import { LogError, LogSuccess } from "@/utils/logger"

//Crud


export const GetAllUsers = async () => {
  try {
    let userModel = userEntity();
    //Search all users

    return await userModel.find({ isDelete: false })

  } catch (error) {
    LogError(`[ORM ERROR]: Getting all Users: ${error}`)
  }
}