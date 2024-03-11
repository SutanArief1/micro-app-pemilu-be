import { AppDataSource } from "../data-source"
import { User } from "../entity/User"

export default new class UserService {
  async create(reqBody: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(User)

      const user = repository.insert({
        fullname: reqBody.fullname,
        alamat: reqBody.alamat,
        jenis_kelamin: reqBody.jenis_kelamin,
        username: reqBody.username,
        password: reqBody.password
      })

      return user
    } catch (error) {
      throw error
    }
  }

  async find(): Promise<any> {
    try {
      const users = await AppDataSource
        .getRepository(User)
        .createQueryBuilder()
        .getMany()

      return users
    } catch (error) {
      throw error
    }
  }

  async update(reqBody: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(User)

      const user = repository.update(
        { id: reqBody.id },
        {
          fullname: reqBody.fullname,
          alamat: reqBody.alamat,
          jenis_kelamin: reqBody.jenis_kelamin,
          username: reqBody.username,
          password: reqBody.password
        }
      )

      return user
    } catch (error) {
      throw error
    }
  }

  async delete(reqBody: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(User)

      const deleteUser = repository.delete({
        id: reqBody.id
      })

      return deleteUser
    } catch (error) {
      throw error
    }
  }
}