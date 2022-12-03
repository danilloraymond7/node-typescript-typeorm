import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './entitiesUser'

@Entity('giveAllowsUsers')

export class GiveAllowUser {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @ManyToOne(() => User, user => user.User)
  @JoinColumn({ name: 'user_id' })
    user: User
}
