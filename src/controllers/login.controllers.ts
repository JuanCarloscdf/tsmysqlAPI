import { type Request, type Response } from 'express'
import { errorHandler } from '../utils/error.handler'
import * as fn from '../services/login.services'
export const postLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const loginData = req.body
    const servResponse = await fn.postLoginServ(loginData)
    res.send(servResponse)
  } catch (error) {
    errorHandler('ERROR_POST_LOGIN', res, error)
  }
}
