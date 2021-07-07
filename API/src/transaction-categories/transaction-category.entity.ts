import { Exclude } from 'class-transformer';
import { AppEntity } from 'src/app.entity';
import { User } from 'src/auth/user.entity';
import { Transaction } from 'src/transactions/transaction.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CategoryTypes } from './category-types.enum';

@Entity()
export class TransactionCategory extends AppEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  icon: string;

  @Column({ type: 'enum', enum: CategoryTypes })
  type: CategoryTypes;

  @OneToMany(() => Transaction, ({ category }) => category, {
    eager: false,
  })
  @Exclude({ toPlainOnly: true })
  transaction: Transaction;

  @ManyToOne(() => User, ({ transactionCategories }) => transactionCategories, {
    eager: false,
  })
  @Exclude({ toPlainOnly: true })
  user: User;
}
