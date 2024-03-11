import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Partai } from "./Partai"

@Entity()
export class Paslon {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nama: string

  @Column()
  image: string

  @Column()
  no_urut: number

  @Column()
  visi_misi: string

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date

  @OneToMany(() => Partai, (partai) => partai.paslon)
  partai: Partai
}
