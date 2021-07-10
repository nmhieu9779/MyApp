import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { CategoryTypes } from 'src/transaction-categories/category-types.enum';
import { TransactionWallet } from 'src/transaction-wallets/transaction-wallet.entity';
import { TransactionWalletsRepository } from 'src/transaction-wallets/transaction-wallet.repository';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './transaction.entity';
import { TransactionsRepository } from './transaction.repository';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(TransactionsRepository)
    private transactionsRepository: TransactionsRepository,
    private transactionWalletsRepository: TransactionWalletsRepository,
  ) {}

  getTransactions(user: User): Promise<Array<Transaction>> {
    return this.transactionsRepository.getTransactions(user);
  }

  async createTransaction(
    createTransactionDto: CreateTransactionDto,
    user: User,
  ): Promise<{ transaction: Transaction; wallet: TransactionWallet }> {
    const transaction = await this.transactionsRepository.createTransaction(
      createTransactionDto,
      user,
    );
    const amount =
      +createTransactionDto.amount *
      (transaction.category.type === CategoryTypes.EXPENSE ? -1 : 1);
    const wallet = await this.transactionWalletsRepository.updateWallet(
      user,
      +createTransactionDto.walletId,
      amount,
    );

    return { transaction, wallet };
  }
}
