import { AppDataSource } from "../data-source"
import { Paslon } from "../entity/Paslon"

export default new class PaslonService {
  async create(reqBody: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(Paslon)

      const paslon = repository.insert({
        nama: reqBody.nama,
        image: reqBody.image,
        no_urut: reqBody.no_urut,
        visi_misi: reqBody.visi_misi
      })

      return paslon
    } catch (error) {
      throw error
    }
  }

  async find(): Promise<any> {
    try {
      const listPaslon = await AppDataSource
        .getRepository(Paslon)
        .createQueryBuilder("paslon")
        .getMany()

      return listPaslon
    } catch (error) {
      throw error
    }
  }

  async update(reqBody: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(Paslon)

      const paslon = repository.update(
        { id: reqBody.id },
        {
          nama: reqBody.nama,
          image: reqBody.image,
          no_urut: reqBody.no_urut,
          visi_misi: reqBody.visi_misi
        }
      )

      return paslon
    } catch (error) {
      throw error
    }
  }

  async delete(reqBody: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(Paslon)

      const deletePaslon = repository.delete({
        id: reqBody.id
      })

      return deletePaslon
    } catch (error) {
      throw error
    }
  }
}