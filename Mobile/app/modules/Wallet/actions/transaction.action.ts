import {createAction} from '@reduxjs/toolkit';
import {CreateTransactionDto, TransactionDto} from '../dto';

export enum TransactionAction {
  GetTransactionsRequest = 'WALLET/GET_TRANSACTIONS_REQUEST',
  GetTransactionsSuccess = 'WALLET/GET_TRANSACTIONS_SUCCESS',
  GetTransactionsError = 'WALLET/GET_TRANSACTIONS_ERROR',

  CreateTransactionRequest = 'WALLET/CREATE_TRANSACTION_REQUEST',
  CreateTransactionSuccess = 'WALLET/CREATE_TRANSACTION_SUCCESS',
  CreateTransactionError = 'WALLET/CREATE_TRANSACTION_ERROR',
}

const getTransactionsRequest = createAction(
  TransactionAction.GetTransactionsRequest,
);
const getTransactionsSuccess = createAction<TransactionDto[]>(
  TransactionAction.GetTransactionsSuccess,
);
const getTransactionsError = createAction(
  TransactionAction.GetTransactionsError,
);

const createTransactionRequest = createAction<CreateTransactionDto>(
  TransactionAction.CreateTransactionRequest,
);
const createTransactionSuccess = createAction<TransactionDto>(
  TransactionAction.CreateTransactionSuccess,
);
const createTransactionError = createAction(
  TransactionAction.CreateTransactionError,
);

export {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  createTransactionRequest,
  createTransactionSuccess,
  createTransactionError,
};
