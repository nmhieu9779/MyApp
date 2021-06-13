import {ScreenName} from 'app/constants/screenName';

export type RootStackParamList = {
  [ScreenName.TRANSACTION_ICONS]: {
    onCallback: (value: string) => void;
  };
};
