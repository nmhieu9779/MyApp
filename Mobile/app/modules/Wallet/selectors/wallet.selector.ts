import {RootState} from 'app/store';
import {createSelector} from 'reselect';
import {WalletDto} from '../dto';

const selectWalletState = (state: RootState) => state.walletState;

const selectWallets = createSelector(
  selectWalletState,
  (walletState): WalletDto[] => {
    return walletState.wallet;
  },
);

export {selectWallets, selectWalletState};
