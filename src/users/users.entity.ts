import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  public id?: string;

  @Column({ unique: true })
  public email?: string;

  @Column()
  public name: string;

  @Column()
  public password: string;
}
