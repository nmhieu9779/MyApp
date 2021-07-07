import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { TransactionCategoriesService } from './transaction-categories.service';
import { TransactionCategory } from './transaction-category.entity';

@Controller('transaction/categories')
@UseGuards(AuthGuard())
export class TransactionCategoriesController {
  constructor(
    private transactionCategoryService: TransactionCategoriesService,
  ) {}

  @Get()
  getCategories(@GetUser() user: User): Promise<Array<TransactionCategory>> {
    return this.transactionCategoryService.getCategories(user);
  }

  @Post()
  createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
    @GetUser() user: User,
  ): Promise<TransactionCategory> {
    return this.transactionCategoryService.createCategory(
      createCategoryDto,
      user,
    );
  }
}
