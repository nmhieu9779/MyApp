import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { TransactionCategory } from './transaction-category.entity';

@EntityRepository(TransactionCategory)
export class TransactionCategoriesRepository extends Repository<TransactionCategory> {
  async getCategories(user: User): Promise<Array<TransactionCategory>> {
    const categories = await this.createQueryBuilder('category')
      .where({ user })
      .orderBy({
        'category.id': 'ASC',
      })
      .getMany();

    return categories;
  }

  async createCategory(
    createCategoryDto: CreateCategoryDto,
    user: User,
  ): Promise<TransactionCategory> {
    const { name, icon, type } = createCategoryDto;
    const category: TransactionCategory = this.create({
      name,
      icon,
      type,
      user,
    });

    await this.save(category);

    return category;
  }
}
