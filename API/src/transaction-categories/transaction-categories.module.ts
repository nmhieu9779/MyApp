import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { TransactionCategoriesController } from './transaction-categories.controller';
import { TransactionCategoriesRepository } from './transaction-categories.repository';
import { TransactionCategoriesService } from './transaction-categories.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionCategoriesRepository]),
    AuthModule,
  ],
  controllers: [TransactionCategoriesController],
  providers: [TransactionCategoriesService],
})
export class TransactionCategoriesModule {}
