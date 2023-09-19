import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 15 })
  cpf: string;

  @Column({ type: 'varchar', length: 40 })
  email: string;

  @Column({ type: 'enum', enum: ['m', 'f', 'u'] })
  color: string;

  @Column({ type: 'varchar' })
  obs: string;
}
