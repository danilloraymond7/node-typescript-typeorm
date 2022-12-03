import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('allowsSystem')

export class AllowSystem {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({ type: 'text' })
    name:string
}
