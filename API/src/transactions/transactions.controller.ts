import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { TransactionWallet } from 'src/transaction-wallets/transaction-wallet.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './transaction.entity';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
@UseGuards(AuthGuard())
export class TransactionsController {
  constructor(private transactionService: TransactionsService) {}

  @Get()
  getTransactions(@GetUser() user: User): Promise<Array<Transaction>> {
    return this.transactionService.getTransactions(user);
  }

  @Post()
  createTransaction(
    @Body() createTransactionDto: CreateTransactionDto,
    @GetUser() user: User,
  ): Promise<{ transaction: Transaction; wallet: TransactionWallet }> {
    return this.transactionService.createTransaction(
      createTransactionDto,
      user,
    );
  }
}
