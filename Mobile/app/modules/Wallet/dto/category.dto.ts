import {BudgetIconsName} from 'app/common/theme/budgetAssets';

export enum CategoryTypeDto {
  EXPENSE = 'EXPENSE',
  IN_COME = 'IN_COME',
}
export interface CategoryDto {
  id?: number;
  name: string;
  icon: BudgetIconsName;
  type?: CategoryTypeDto;
}
