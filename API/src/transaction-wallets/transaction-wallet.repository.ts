import { NotFoundException } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { TransactionWallet } from './transaction-wallet.entity';

@EntityRepository(TransactionWallet)
export class TransactionWalletsRepository extends Repository<TransactionWallet> {
  async getWallets(user: User): Promise<Array<TransactionWallet>> {
    const wallets = await this.createQueryBuilder('wallet')
      .where({ user })
      .orderBy({
        'wallet.id': 'ASC',
      })
      .getMany();

    return wallets;
  }

  async getWallet(user: User, id: number): Promise<TransactionWallet> {
    const wallet = this.findOne({ where: { id, user } });

    if (!wallet) {
      throw new NotFoundException(`Wallet with Id ${id} not found`);
    }

    return wallet;
  }

  async createWallet(
    createWalletDto: CreateWalletDto,
    user: User,
  ): Promise<TransactionWallet> {
    const { name, icon, amount } = createWalletDto;
    const wallet: TransactionWallet = this.create({
      name,
      icon,
      amount,
      user,
    });

    await this.save(wallet);

    return wallet;
  }

  async updateWallet(
    user: User,
    id: number,
    updateAmount: number,
  ): Promise<TransactionWallet> {
    const wallet = await this.getWallet(user, id);

    wallet.amount = wallet.amount + +updateAmount;

    this.save(wallet);

    return wallet;
  }
}
