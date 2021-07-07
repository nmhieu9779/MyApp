import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { TransactionCategoriesRepository } from './transaction-categories.repository';
import { TransactionCategory } from './transaction-category.entity';

@Injectable()
export class TransactionCategoriesService {
  constructor(
    @InjectRepository(TransactionCategoriesRepository)
    private transactionCategoriesRepository: TransactionCategoriesRepository,
  ) {}

  getCategories(user: User): Promise<Array<TransactionCategory>> {
    return this.transactionCategoriesRepository.getCategories(user);
  }

  createCategory(
    createCategoryDto: CreateCategoryDto,
    user: User,
  ): Promise<TransactionCategory> {
    return this.transactionCategoriesRepository.createCategory(
      createCategoryDto,
      user,
    );
  }
}
