import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { Salt, HashedPassword } from '@src/utils';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @CreateDateColumn({ type: 'date' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'date' })
  updatedAt: Date;

  @BeforeInsert()
  createHashPassword() {
    this.password = `${Salt}:${HashedPassword(this.password, Salt)}`;
  }

  comparePassword(password: string): boolean {
    const [salt, hashedPassword] = this.password.split(':');
    return hashedPassword === HashedPassword(password, salt);
  }
}
