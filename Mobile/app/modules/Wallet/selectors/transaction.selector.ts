import {createSelector} from 'reselect';
import {TransactionDto} from '../dto';
import {selectWalletState} from './wallet.selector';

const selectTransactions = createSelector(
  selectWalletState,
  (walletState): TransactionDto[] => walletState.transaction,
);

export {selectTransactions};
