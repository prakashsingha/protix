import { BaseModel } from 'src/common/model/base.model';
import { Entity, Column, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.model';

@Entity()
export class Camera extends BaseModel {
  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @Column({ name: 'zone_id' })
  zoneId: number;
}
