import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class Article {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  image: string

  @Column()
  content: string

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date

  @ManyToOne(() => User, (user) => user.article)
  user: User
}
