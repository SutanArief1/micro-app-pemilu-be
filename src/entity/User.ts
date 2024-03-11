import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Article } from "./Article"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullname: string

    @Column()
    alamat: string

    @Column()
    jenis_kelamin: string

    @Column()
    username: string

    @Column()
    password: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date

    @OneToMany(() => Article, (article) => article.user)
    article: Article
}
