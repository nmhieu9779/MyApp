import {BudgetIconsName} from 'app/common/theme/budgetAssets';
import {ScreenName} from 'app/constants';
import {CategoryType} from 'app/modules/Wallet/constants';

export type RootStackParamList = {
  [ScreenName.TRANSACTION_ICONS]: {
    onCallback: (value: BudgetIconsName) => void;
  };

  [ScreenName.WALLET]: {};

  [ScreenName.ADD_TRANSACTION]: undefined;

  [ScreenName.SELECT_CATEGORY]: {
    onCallback: (value: string) => void;
  };

  [ScreenName.ADD_CATEGORY]: {
    categoryType: CategoryType;
  };
};
