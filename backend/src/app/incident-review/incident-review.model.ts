import { BaseModel } from 'src/common/model/base.model';
import { Entity, Column, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.model';
import { Status } from '../status/status.model';
import { IncidentCase } from '../incident-case/incident-case.model';

@Entity()
export class IncidentReview extends BaseModel {
  @Column({ name: 'incident_case_id' })
  incidentCaseId: number;

  @ManyToOne((type) => IncidentCase)
  @JoinColumn({ name: 'incident_case_id' })
  incidentCase: IncidentCase;

  @Column({ name: 'reviewed_by' })
  reviewedBy: number;

  @ManyToOne((type) => User, { eager: true })
  @JoinColumn({ name: 'reviewed_by' })
  reviewedByUser: User;

  @Column({ name: 'before_status_id' })
  beforeStatusId: number;

  @ManyToOne((type) => Status, { eager: true })
  @JoinColumn({ name: 'before_status_id' })
  beforeStatus: Status;

  @Column({ name: 'after_status_id' })
  afterStatusId: number;

  @ManyToOne((type) => Status, { eager: true })
  @JoinColumn({ name: 'after_status_id' })
  afterStatus: Status;

  @Column()
  comments: string;
}
