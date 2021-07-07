import {createSelector} from 'reselect';
import {CategoryDto, CategoryTypeDto} from '../dto';
import {selectWalletState} from './wallet.selector';

const selectCategories = (type: CategoryTypeDto) =>
  createSelector(selectWalletState, (walletState): CategoryDto[] => {
    return walletState.category.filter(category => category.type === type);
  });

export {selectCategories};
