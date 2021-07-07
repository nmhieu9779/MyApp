import { Exclude } from 'class-transformer';
import { AppEntity } from 'src/app.entity';
import { Task } from 'src/tasks/task.entity';
import { TransactionCategory } from 'src/transaction-categories/transaction-category.entity';
import { TransactionWallet } from 'src/transaction-wallets/transaction-wallet.entity';
import { Transaction } from 'src/transactions/transaction.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends AppEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Exclude()
  @Column()
  password: string;

  @OneToMany(() => Task, ({ user }) => user, { eager: true })
  tasks: Array<Task>;

  @OneToMany(() => TransactionCategory, ({ user }) => user, { eager: true })
  transactionCategories: Array<TransactionCategory>;

  @OneToMany(() => TransactionWallet, ({ user }) => user, { eager: true })
  transactionWallets: Array<TransactionWallet>;

  @OneToMany(() => Transaction, ({ user }) => user, { eager: true })
  transactions: Array<Transaction>;
}
