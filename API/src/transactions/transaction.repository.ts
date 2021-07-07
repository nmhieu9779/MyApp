import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './transaction.entity';

@EntityRepository(Transaction)
export class TransactionsRepository extends Repository<Transaction> {
  async getTransactions(user: User): Promise<Array<Transaction>> {
    const transactions = await this.createQueryBuilder('transaction')
      .leftJoinAndSelect('transaction.category', 'category')
      .leftJoinAndSelect('transaction.wallet', 'wallet')
      .where({ user })
      .getMany();

    return transactions;
  }

  async getTransaction(user: User, id: string): Promise<Transaction> {
    const transaction = await this.createQueryBuilder('transaction')
      .leftJoinAndSelect('transaction.category', 'category')
      .leftJoinAndSelect('transaction.wallet', 'wallet')
      .where({ user, id })
      .getOne();

    return transaction;
  }

  async createTransaction(
    createWalletDto: CreateTransactionDto,
    user: User,
  ): Promise<Transaction> {
    const { categoryId, walletId, ...data } = createWalletDto;

    const { id } = await this.save(
      this.create({
        ...data,
        user,
        category: { id: categoryId },
        wallet: { id: walletId },
      }),
    );

    return this.getTransaction(user, id);
  }
}
