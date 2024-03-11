import { AppDataSource } from "../data-source"
import { Article } from "../entity/Article"

export default new class ArticleService {
  async create(reqBody: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(Article)

      const article = repository.insert({
        title: reqBody.title,
        image: reqBody.image,
        content: reqBody.content
      })

      return article
    } catch (error) {
      throw error
    }
  }

  async find(): Promise<any> {
    try {
      const articles = await AppDataSource
        .getRepository(Article)
        .createQueryBuilder("article")
        .getMany()

      return articles
    } catch (error) {
      throw error
    }
  }

  async update(reqBody: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(Article)

      const article = repository.update(
        { id: reqBody.id },
        {
          title: reqBody.title,
          image: reqBody.image,
          content: reqBody.content
        }
      )

      return article
    } catch (error) {
      throw error
    }
  }

  async delete(reqBody: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(Article)

      const deleteArticle = repository.delete({
        id: reqBody.id
      })

      return deleteArticle
    } catch (error) {
      throw error
    }
  }
}