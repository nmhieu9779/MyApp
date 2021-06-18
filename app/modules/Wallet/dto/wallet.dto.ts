import {BudgetIconsName} from 'app/common/theme/budgetAssets';

export interface WalletDto {
  name: string;
  icon: BudgetIconsName;
  key: string;
  amount: number;
}
