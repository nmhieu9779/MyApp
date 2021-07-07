import { IsNotEmpty } from 'class-validator';

export class CreateWalletDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  icon: string;

  @IsNotEmpty()
  amount: number;
}
