import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTransactionDto {
  @IsOptional()
  note: string;

  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  categoryId: string;

  @IsNotEmpty()
  walletId: string;
}
