import { BaseModel } from 'src/common/model/base.model';
import { Entity, Column } from 'typeorm';

@Entity()
export class Team extends BaseModel {
  @Column()
  name: string;

  @Column()
  description: string;
}
