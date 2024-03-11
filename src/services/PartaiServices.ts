import { AppDataSource } from "../data-source"
import { Partai } from "../entity/Partai"

export default new class PartaiService {
  async create(reqBody: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(Partai)

      const partai = repository.insert({
        nama: reqBody.nama,
        image: reqBody.image,
        ketua_umum: reqBody.ketua_umum,
        visi_misi: reqBody.visi_misi,
        alamat: reqBody.alamat
      })

      return partai
    } catch (error) {
      throw error
    }
  }

  async find(): Promise<any> {
    try {
      const listPartai = await AppDataSource
        .getRepository(Partai)
        .createQueryBuilder("partai")
        .getMany()

      return listPartai
    } catch (error) {
      throw error
    }
  }

  async update(reqBody: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(Partai)

      const partai = repository.update(
        { id: reqBody.id },
        {
          nama: reqBody.nama,
          image: reqBody.image,
          ketua_umum: reqBody.ketua_umum,
          visi_misi: reqBody.visi_misi,
          alamat: reqBody.alamat
        }
      )

      return partai
    } catch (error) {
      throw error
    }
  }

  async delete(reqBody: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(Partai)

      const deletePartai = repository.delete({
        id: reqBody.id
      })

      return deletePartai
    } catch (error) {
      throw error
    }
  }
}