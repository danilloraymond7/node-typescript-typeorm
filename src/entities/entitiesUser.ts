import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { GiveAllowUser } from './EntitiesgiveAllows'

@Entity('users')

export class User {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({ type: 'text' })
    name:string

  @Column({ type: 'text' })
    email:string

    @OneToOne(() => GiveAllowUser, (allow) => allow.user)
      allows: GiveAllowUser[]
}
