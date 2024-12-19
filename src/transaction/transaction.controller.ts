import { Controller, Post, Body } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('execute')
  async executeTransaction(@Body() body: { senderId: number, receiverId: number, amount: number }) {
    console.log('Received body:', body); // Depuración
    if (!body.senderId || !body.receiverId || !body.amount) {
      throw new Error('Invalid request: Missing senderId, receiverId, or amount');
    }
    return this.transactionService.performTransaction(
      body.senderId,
      body.receiverId,
      body.amount,
    );
  }
}
