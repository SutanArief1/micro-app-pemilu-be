import { Request, Response } from "express"
import PaslonServices from "../services/PaslonServices"

export default new class PaslonControllers {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body

      const paslon = await PaslonServices.create(data)

      return res.status(201).json(paslon)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const listPaslon = await PaslonServices.find()

      return res.status(200).json(listPaslon)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body

      const paslon = await PaslonServices.update(data)

      return res.status(200).json(paslon)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body

      const paslon = await PaslonServices.delete(data)

      return res.status(200).json(paslon)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}