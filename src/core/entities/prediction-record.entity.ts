import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PredictionRecord {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false })
  date: Date;

  @Column("float", { array: true })
  prices: number[];
}
