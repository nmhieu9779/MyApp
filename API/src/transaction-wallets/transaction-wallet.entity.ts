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

@Entity()
export class TransactionWallet extends AppEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  icon: string;

  @Column()
  amount: number;

  @OneToMany(() => Transaction, ({ wallet }) => wallet, {
    eager: false,
  })
  @Exclude({ toPlainOnly: true })
  transaction: Transaction[];

  @ManyToOne(() => User, ({ transactionWallets }) => transactionWallets, {
    eager: false,
  })
  @Exclude({ toPlainOnly: true })
  user: User;
}
