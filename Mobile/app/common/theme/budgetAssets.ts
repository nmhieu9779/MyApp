import {ImageURISource} from 'react-native';
import {
  book,
  budget as budgetIcon,
  calculate,
  cloth,
  coffee,
  drink,
  electricity,
  entertainment,
  fastFood,
  financial,
  food,
  fruit,
  gas,
  gift,
  groceries,
  gym,
  income,
  insurance,
  investment,
  laundry,
  magazine,
  massage,
  medical,
  mortgage,
  movie,
  music,
  painting,
  parking,
  publicTransport,
  salon,
  shoppingCart,
  snack,
  toy,
  travel,
  wallet,
} from '../../../assets/icons/budget';

export interface BudgetIcons {
  readonly book: ImageURISource;
  readonly calculate: ImageURISource;
  readonly budget: ImageURISource;
  readonly cloth: ImageURISource;
  readonly coffee: ImageURISource;
  readonly drink: ImageURISource;
  readonly electricity: ImageURISource;
  readonly entertainment: ImageURISource;
  readonly fastFood: ImageURISource;
  readonly financial: ImageURISource;
  readonly food: ImageURISource;
  readonly fruit: ImageURISource;
  readonly gas: ImageURISource;
  readonly gift: ImageURISource;
  readonly groceries: ImageURISource;
  readonly gym: ImageURISource;
  readonly income: ImageURISource;
  readonly insurance: ImageURISource;
  readonly investment: ImageURISource;
  readonly laundry: ImageURISource;
  readonly magazine: ImageURISource;
  readonly massage: ImageURISource;
  readonly medical: ImageURISource;
  readonly mortgage: ImageURISource;
  readonly movie: ImageURISource;
  readonly music: ImageURISource;
  readonly painting: ImageURISource;
  readonly parking: ImageURISource;
  readonly publicTransport: ImageURISource;
  readonly salon: ImageURISource;
  readonly shoppingCart: ImageURISource;
  readonly snack: ImageURISource;
  readonly toy: ImageURISource;
  readonly travel: ImageURISource;
  readonly wallet: ImageURISource;
}

export type BudgetIconsName = keyof BudgetIcons;

const budget = Object.freeze<BudgetIcons>({
  book,
  calculate,
  budget: budgetIcon,
  cloth,
  coffee,
  drink,
  electricity,
  entertainment,
  fastFood,
  financial,
  food,
  fruit,
  gas,
  gift,
  groceries,
  gym,
  income,
  insurance,
  investment,
  laundry,
  magazine,
  massage,
  medical,
  mortgage,
  movie,
  music,
  painting,
  parking,
  publicTransport,
  salon,
  shoppingCart,
  snack,
  toy,
  travel,
  wallet,
});

const budgetIcons = Object.freeze(Object.keys(budget));

export {budget, budgetIcons};
