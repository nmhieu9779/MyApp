import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { TransactionWalletsRepository } from './transaction-wallet.repository';
import { TransactionWalletsController } from './transaction-wallets.controller';
import { TransactionWalletsService } from './transaction-wallets.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionWalletsRepository]),
    AuthModule,
  ],
  controllers: [TransactionWalletsController],
  providers: [TransactionWalletsService],
})
export class TransactionWalletsModule {}
