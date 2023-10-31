import { BaseModel } from 'src/common/model/base.model';
import { Entity, Column, JoinColumn, ManyToOne, RelationId } from 'typeorm';
import { User } from '../user/user.model';

@Entity()
export class Status extends BaseModel {
  @Column()
  name: string;

  @Column()
  description: string;
}
