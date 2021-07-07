import {CategoryDto} from './category.dto';
import {WalletDto} from './wallet.dto';

export interface TransactionDto {
  id?: number;
  amount: number;
  note: string;
  date: string;
  category: CategoryDto;
  wallet: WalletDto;
}

export interface CreateTransactionDto {
  id?: number;
  amount: number;
  note: string;
  date: string;
  categoryId: number;
  walletId: number;
}
