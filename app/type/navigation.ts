import {ScreenName} from 'app/constants';

export type RootStackParamList = {
  [ScreenName.TRANSACTION_ICONS]: {
    onCallback: (value: string) => void;
  };

  [ScreenName.WALLET]: {};

  [ScreenName.ADD_TRANSACTION]: undefined;

  [ScreenName.SELECT_CATEGORY]: {
    onCallback: (value: string) => void;
  };
};
