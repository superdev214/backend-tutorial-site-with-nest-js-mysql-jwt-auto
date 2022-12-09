import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tutorial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: false })
  published: boolean;
}

