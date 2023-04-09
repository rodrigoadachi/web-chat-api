import {
  Entity,
  Column,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Message {

  @PrimaryColumn({ type: 'uuid', length: 120 })
  id: string;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 120 })
  email: string;

  @Column({ length: 255, unique: true })
  text: string;

  @Column({ nullable: false })
  createdAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;

}