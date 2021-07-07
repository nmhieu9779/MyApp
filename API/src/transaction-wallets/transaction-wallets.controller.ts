import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { TransactionWallet } from './transaction-wallet.entity';
import { TransactionWalletsService } from './transaction-wallets.service';

@Controller('transaction/wallets')
@UseGuards(AuthGuard())
export class TransactionWalletsController {
  constructor(private transactionWalletService: TransactionWalletsService) {}

  @Get()
  getWallets(@GetUser() user: User): Promise<Array<TransactionWallet>> {
    return this.transactionWalletService.getWallets(user);
  }

  @Post()
  createWallet(
    @Body() createWalletDto: CreateWalletDto,
    @GetUser() user: User,
  ): Promise<TransactionWallet> {
    return this.transactionWalletService.createWallet(createWalletDto, user);
  }
}
