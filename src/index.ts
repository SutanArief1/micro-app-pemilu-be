import express, { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import Route from "./routes"

AppDataSource.initialize().then(async () => {
    const app = express()
    const port = 3000

    app.use(express.json())
    app.use('/api/v1', Route)

    app.listen(port, () => console.log(`Server run on PORT ${port}`))
}).catch(error => console.log(error))
