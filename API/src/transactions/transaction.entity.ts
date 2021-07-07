import { Exclude } from 'class-transformer';
import { AppEntity } from 'src/app.entity';
import { User } from 'src/auth/user.entity';
import { TransactionCategory } from 'src/transaction-categories/transaction-category.entity';
import { TransactionWallet } from 'src/transaction-wallets/transaction-wallet.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Transaction extends AppEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  amount: number;

  @Column()
  note: string;

  @Column()
  date: Date;

  @ManyToOne(() => TransactionCategory, ({ transaction }) => transaction, {
    eager: false,
  })
  category: TransactionCategory;

  @ManyToOne(() => TransactionWallet, ({ transaction }) => transaction, {
    eager: false,
  })
  wallet: TransactionWallet;

  @ManyToOne(() => User, ({ transactions }) => transactions, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;
}
