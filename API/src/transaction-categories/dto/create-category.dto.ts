import { IsEnum, IsNotEmpty } from 'class-validator';
import { CategoryTypes } from '../category-types.enum';

export class CreateCategoryDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  icon: string;

  @IsNotEmpty()
  @IsEnum(CategoryTypes)
  type: CategoryTypes;
}
