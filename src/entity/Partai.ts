import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { Paslon } from "./Paslon"

@Entity()
export class Partai {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nama: string

  @Column()
  image: string

  @Column()
  ketua_umum: string

  @Column()
  visi_misi: string

  @Column()
  alamat: string

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date

  @ManyToOne(() => Paslon, (paslon) => paslon.partai)
  paslon: Paslon
}
