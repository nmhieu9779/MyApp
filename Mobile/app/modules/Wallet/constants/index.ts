import {CategoryDto, CategoryTypeDto} from '../dto';

export interface CategoryType {
  key: CategoryDto;
  title: string;
}

const categoryType = [
  {key: CategoryTypeDto.EXPENSE, title: 'Expense'},
  {key: CategoryTypeDto.IN_COME, title: 'Income'},
];

categoryType.forEach(Object.freeze);

export {categoryType};
