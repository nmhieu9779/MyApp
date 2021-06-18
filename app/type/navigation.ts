import {BudgetIconsName} from 'app/common/theme/budgetAssets';
import {ScreenName} from 'app/constants';
import {CategoryType} from 'app/modules/Wallet/constants';
import {CategoryDto, WalletDto} from 'app/modules/Wallet/dto';

export type RootStackParamList = {
  [ScreenName.TRANSACTION_ICONS]: {
    onCallback: (value: BudgetIconsName) => void;
  };

  [ScreenName.WALLET]: {};

  [ScreenName.ADD_TRANSACTION]: undefined;

  [ScreenName.SELECT_CATEGORY]: {
    onCallback: (data: CategoryDto) => void;
  };

  [ScreenName.ADD_CATEGORY]: {
    categoryType: CategoryType;
  };

  [ScreenName.NOTE]: {
    onCallback: (value: string) => void;
    note: string;
  };

  [ScreenName.SELECT_WALLET]: {
    onCallback: (value: WalletDto) => void;
    wallet: WalletDto;
  };
};
