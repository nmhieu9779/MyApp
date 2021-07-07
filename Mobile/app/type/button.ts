export enum ButtonColorType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  GREY = 'grey',
  SEARCH_BG = 'searchBg',
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  BLACK = 'black',
}

export enum ButtonType {
  SOLID = 'Solid',
  CLEAR = 'Clear',
  OUTLINE = 'Outline',
}

export interface GroupButtonItem<T> {
  title: string;
  key: T;
}
