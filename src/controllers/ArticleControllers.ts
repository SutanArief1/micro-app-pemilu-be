import { Request, Response } from "express"
import ArticleServices from "../services/ArticleServices"

export default new class ArticleControllers {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body

      const article = await ArticleServices.create(data)

      return res.status(201).json(article)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const articles = await ArticleServices.find()

      return res.status(200).json(articles)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body

      const article = await ArticleServices.update(data)

      return res.status(200).json(article)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body

      const article = await ArticleServices.delete(data)

      return res.status(200).json(article)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}