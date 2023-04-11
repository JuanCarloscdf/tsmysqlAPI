
import { pool } from '../config/mysql'
import { type User } from '../interfaces/user.interface'
import { hashPassword } from '../utils/bcrypt.handler'
export const getUsersServ = async (): Promise<any> => {
  try {
    const [dataBaseRes] = await pool.query('CALL users();')
    return dataBaseRes
  } catch (error) {
    console.log(error)
  }
}
export const getUserServ = async (id: string): Promise<any> => {
  try {
    const [dataBaseRes] = await pool.query(`CALL user(${id})`)
    return dataBaseRes
  } catch (error) {
    console.log(error)
    throw (error)
  }
}
export const postUserServ = async (newUser: User): Promise<any> => {
  try {
    const hashedPassword = await hashPassword(newUser.password)
    const dbResponse = await pool.query(`INSERT INTO user (first_name,last_name,email,password,cellphone,user_type_id) VALUES ('${newUser.first_name}','${newUser.last_name}','${newUser.email}','${hashedPassword}','${newUser.cellphone}',${newUser.user_type_id});`)
    console.log(dbResponse)
    return dbResponse
  } catch (error) {
    console.log(error)
  }
}

export const patchUserServ = async (id: number, atribute: string, value: string): Promise<any> => {
  try {
    const [dataBaseRes] = await pool.query('SELECT 1 + 1 AS result')
    return dataBaseRes
  } catch (error) {
    console.log(error)
  }
}
export const deleteUserServ = async (id: string): Promise<any> => {
  try {
    const [dataBaseRes] = await pool.query(`DELETE FROM user WHERE user_id=${id};`)
    return dataBaseRes
  } catch (error) {
    console.log(error)
  }
}
export const putUserServ = async (newUser: User, id: string): Promise<any> => {
  try {
    console.log(newUser)
    const hashedPassword = await hashPassword(newUser.password)
    const [dataBaseRes] = await pool.query(`UPDATE user SET first_name='${newUser.first_name}',last_name='${newUser.last_name}',email='${newUser.email}',password='${hashedPassword}',cellphone='${newUser.cellphone}',user_type_id=${newUser.user_type_id} WHERE user_id=${id};`)
    return dataBaseRes
  } catch (error) {
    console.log(error)
  }
}
