import {
  CategoryAction,
  TransactionAction,
  WalletAction,
} from 'app/modules/Wallet/actions';
import {
  CategoryDto,
  CreateTransactionDto,
  WalletDto,
} from 'app/modules/Wallet/dto';
import {AxiosRequestConfig} from 'axios';

const getWalletsRequest = (): AxiosRequestConfig => ({
  url: '/transaction/wallets',
  method: 'get',
});
const createWalletRequest = (data: WalletDto): AxiosRequestConfig => ({
  url: '/transaction/wallets',
  method: 'post',
  data,
});

const getCategoriesRequest = (): AxiosRequestConfig => ({
  url: '/transaction/categories',
  method: 'get',
});
const createCategoryRequest = (data: CategoryDto): AxiosRequestConfig => ({
  url: '/transaction/categories',
  method: 'post',
  data,
});

const getTransactionsRequest = (): AxiosRequestConfig => ({
  url: '/transactions',
  method: 'get',
});
const createTransactionRequest = (
  data: CreateTransactionDto,
): AxiosRequestConfig => ({
  url: '/transactions',
  method: 'post',
  data,
});

export const api = {
  [WalletAction.GetWalletsRequest]: getWalletsRequest,
  [WalletAction.CreateWalletRequest]: createWalletRequest,
  [CategoryAction.GetCategoriesRequest]: getCategoriesRequest,
  [CategoryAction.CreateCategoryRequest]: createCategoryRequest,
  [TransactionAction.GetTransactionsRequest]: getTransactionsRequest,
  [TransactionAction.CreateTransactionRequest]: createTransactionRequest,
};
