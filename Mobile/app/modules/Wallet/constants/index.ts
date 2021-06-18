export interface CategoryType {
  key: string;
  title: string;
}

const categoryType = [
  {key: 'expense', title: 'Expense'},
  {key: 'income', title: 'Income'},
];

categoryType.forEach(Object.freeze);

export {categoryType};
