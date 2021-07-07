import {BudgetIconsName} from 'app/common/theme/budgetAssets';

export interface WalletDto {
  id?: number;
  name: string;
  icon: BudgetIconsName;
  amount: number;
}
