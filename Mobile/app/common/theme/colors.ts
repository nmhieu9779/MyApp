import {StyleSheet} from 'react-native';

interface PlatformColors {
  primary: string;
  secondary: string;
  grey: string;
  searchBg: string;
  success: string;
  error: string;
  warning: string;
  black: string;
}

export interface Colors {
  readonly transparent: string;
  readonly primary: string;
  readonly secondary: string;
  readonly white: string;
  readonly black: string;
  readonly grey0: string;
  readonly grey1: string;
  readonly grey2: string;
  readonly grey3: string;
  readonly grey4: string;
  readonly grey5: string;
  readonly greyOutline: string;
  readonly searchBg: string;
  readonly success: string;
  readonly warning: string;
  readonly error: string;
  readonly disabled: string;
  readonly disabledText: string;
  readonly divider: string;
  readonly income: string;
  readonly expenses: string;
  readonly platform: {
    ios: PlatformColors;
    android: PlatformColors;
    web: PlatformColors;
    windows: PlatformColors;
    macos: PlatformColors;
  };
}

const colors: Colors = Object.freeze({
  transparent: 'transparent',
  primary: '#2089dc',
  secondary: '#ca71eb',
  white: '#ffffff',
  black: '#242424',
  grey0: '#393e42',
  grey1: '#43484d',
  grey2: '#5e6977',
  grey3: '#86939e',
  grey4: '#bdc6cf',
  grey5: '#e1e8ee',
  greyOutline: '#bbb',
  searchBg: '#303337',
  success: '#52c41a',
  error: '#ff190c',
  warning: '#faad14',
  disabled: 'hsl(208, 8%, 90%)',
  disabledText: '#ADB1B2',
  income: '#72AA62',
  expenses: '#FF685E',
  // Darker color if hairlineWidth is not thin enough
  divider: StyleSheet.hairlineWidth < 1 ? '#bcbbc1' : 'rgba(0, 0, 0, 0.12)',
  platform: {
    ios: {
      primary: '#007aff',
      secondary: '#5856d6',
      grey: '#7d7d7d',
      searchBg: '#dcdce1',
      success: '#4cd964',
      error: '#ff3b30',
      warning: '#ffcc00',
      black: '#242424',
    },
    android: {
      primary: '#2196f3',
      secondary: '#9C27B0',
      grey: 'rgba(0, 0, 0, 0.54)',
      searchBg: '#dcdce1',
      success: '#4caf50',
      error: '#f44336',
      warning: '#ffeb3b',
      black: '#242424',
    },
    web: {
      primary: '#2089dc',
      secondary: '#ca71eb',
      grey: '#393e42',
      searchBg: '#303337',
      success: '#52c41a',
      error: '#ff190c',
      warning: '#faad14',
      black: '#242424',
    },
    windows: {
      primary: '#2089dc',
      secondary: '#ca71eb',
      grey: '#393e42',
      searchBg: '#303337',
      success: '#52c41a',
      error: '#ff190c',
      warning: '#faad14',
      black: '#242424',
    },
    macos: {
      primary: '#007aff',
      secondary: '#5856d6',
      grey: '#7d7d7d',
      searchBg: '#dcdce1',
      success: '#4cd964',
      error: '#ff3b30',
      warning: '#ffcc00',
      black: '#242424',
    },
  },
});

export {colors};
