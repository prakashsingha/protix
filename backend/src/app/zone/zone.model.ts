import { BaseModel } from 'src/common/model/base.model';
import { Entity, Column, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.model';

@Entity()
export class Zone extends BaseModel {
  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @Column({ name: 'authority_id' })
  authorityId: number;

  @ManyToOne((type) => User, { eager: true })
  @JoinColumn({ name: 'authority_id' })
  authority: User;
}
