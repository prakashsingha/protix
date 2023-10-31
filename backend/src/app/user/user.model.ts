import { BaseModel } from 'src/common/model/base.model';
import { Entity, Column } from 'typeorm';

@Entity()
export class User extends BaseModel {
  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;
}
