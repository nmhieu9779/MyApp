import {createReducer} from '@reduxjs/toolkit';
import {
  createCategorySuccess,
  createWalletSuccess,
  getCategoriesSuccess,
  getWalletsSuccess,
} from '../actions';
import {
  createTransactionSuccess,
  getTransactionsSuccess,
} from '../actions/transaction.action';
import {CategoryDto, TransactionDto, WalletDto} from '../dto';

interface WalletState {
  wallet: WalletDto[];
  category: CategoryDto[];
  transaction: TransactionDto[];
}

const initialWalletState = {
  wallet: [],
  category: [],
  transaction: [],
} as WalletState;

const walletReducer = createReducer(initialWalletState, builder => {
  builder.addCase(getWalletsSuccess, (state, action) => {
    state.wallet = action.payload;
  });
  builder.addCase(createWalletSuccess, (state, action) => {
    state.wallet.push(action.payload);
  });
  builder.addCase(getCategoriesSuccess, (state, action) => {
    state.category = action.payload;
  });
  builder.addCase(createCategorySuccess, (state, action) => {
    state.category.push(action.payload);
  });
  builder.addCase(getTransactionsSuccess, (state, action) => {
    state.transaction = action.payload;
  });
  builder.addCase(createTransactionSuccess, (state, action) => {
    state.transaction.push(action.payload);
  });
});

export {walletReducer, initialWalletState};
