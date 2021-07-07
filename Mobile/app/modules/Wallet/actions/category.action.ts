import {createAction} from '@reduxjs/toolkit';
import {CategoryDto} from '../dto';

export enum CategoryAction {
  GetCategoriesRequest = 'WALLET/GET_CATEGORIES_REQUEST',
  GetCategoriesSuccess = 'WALLET/GET_CATEGORIES_SUCCESS',
  GetCategoriesError = 'WALLET/GET_CATEGORIES_ERROR',

  CreateCategoryRequest = 'WALLET/CREATE_CATEGORY_REQUEST',
  CreateCategorySuccess = 'WALLET/CREATE_CATEGORY_SUCCESS',
  CreateCategoryError = 'WALLET/CREATE_CATEGORY_ERROR',
}

const getCategoriesRequest = createAction(CategoryAction.GetCategoriesRequest);
const getCategoriesSuccess = createAction<CategoryDto[]>(
  CategoryAction.GetCategoriesSuccess,
);
const getCategoriesError = createAction(CategoryAction.GetCategoriesError);

const createCategoryRequest = createAction<CategoryDto>(
  CategoryAction.CreateCategoryRequest,
);
const createCategorySuccess = createAction<CategoryDto>(
  CategoryAction.CreateCategorySuccess,
);
const createCategoryError = createAction(CategoryAction.GetCategoriesError);

export {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
  createCategoryRequest,
  createCategorySuccess,
  createCategoryError,
};
