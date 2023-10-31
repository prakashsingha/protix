import { BaseModel } from 'src/common/model/base.model';
import { Entity, Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Camera } from '../camera/camera.model';
import { User } from '../user/user.model';
import { Zone } from '../zone/zone.model';
import { Team } from '../team/team.model';
import { Status } from '../status/status.model';
import { IncidentReview } from '../incident-review/incident-review.model';

@Entity()
export class IncidentCase extends BaseModel {
  @Column({ name: 'status_id' })
  statusId: number;

  @ManyToOne((type) => Status, { eager: true })
  @JoinColumn({ name: 'status_id' })
  status: Status;

  @Column({ name: 'risk_level' })
  riskLevel: string;

  @Column({ name: 'risk_category' })
  riskCategory: string;

  @Column({ name: 'risk_sub_category' })
  riskSubCategory: string;

  @Column()
  title: string;

  @Column({ name: 'incident_time' })
  incidentTime: Date;

  @ManyToOne((type) => Camera, { eager: true })
  @JoinColumn({ name: 'camera_id' })
  camera: Camera;

  @Column({ name: 'authority_id' })
  authorityId: string;

  @ManyToOne((type) => User, { eager: true })
  @JoinColumn({ name: 'authority_id' })
  authority: User;

  @Column({ name: 'assigned_to' })
  assignedTo: string;

  @ManyToOne((type) => User, { eager: true })
  @JoinColumn({ name: 'assigned_to' })
  assignee: User;

  @Column()
  image: string;

  @ManyToOne((type) => Team, { eager: true })
  @JoinColumn({ name: 'team_id' })
  team: Team;

  @ManyToOne((type) => Zone, { eager: true })
  @JoinColumn({ name: 'zone_id' })
  zone: Zone;

  @OneToMany((type) => IncidentReview, (review) => review.incidentCase, {
    eager: true,
  })
  incidentReviews: IncidentReview[];
}
