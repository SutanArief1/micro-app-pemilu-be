import { Request, Response } from "express"
import PartaiServices from "../services/PartaiServices"

export default new class PartaiControllers {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body

      const partai = await PartaiServices.create(data)

      return res.status(201).json(partai)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const listPartai = await PartaiServices.find()

      return res.status(200).json(listPartai)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body

      const partai = await PartaiServices.update(data)

      return res.status(200).json(partai)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body

      const partai = await PartaiServices.delete(data)

      return res.status(200).json(partai)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}