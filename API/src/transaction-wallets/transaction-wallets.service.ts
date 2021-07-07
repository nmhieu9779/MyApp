import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { TransactionWallet } from './transaction-wallet.entity';
import { TransactionWalletsRepository } from './transaction-wallet.repository';

@Injectable()
export class TransactionWalletsService {
  constructor(
    @InjectRepository(TransactionWalletsRepository)
    private transactionWalletsRepository: TransactionWalletsRepository,
  ) {}

  getWallets(user: User): Promise<Array<TransactionWallet>> {
    return this.transactionWalletsRepository.getWallets(user);
  }

  createWallet(
    createWalletDto: CreateWalletDto,
    user: User,
  ): Promise<TransactionWallet> {
    return this.transactionWalletsRepository.createCategory(
      createWalletDto,
      user,
    );
  }
}
