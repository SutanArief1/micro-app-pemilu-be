import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Article } from "./entity/Article"
import { Paslon } from "./entity/Paslon"
import { Partai } from "./entity/Partai"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "micro_app",
    synchronize: true,
    logging: false,
    entities: [User, Article, Paslon, Partai],
    migrations: [],
    subscribers: [],
})
