import { IsInt, IsPositive, Min } from 'class-validator';

export class TransactionDto {
  @IsInt()
  @Min(1)
  senderId: number;

  @IsInt()
  @Min(1)
  receiverId: number;

  @IsPositive()
  amount: number;
}
