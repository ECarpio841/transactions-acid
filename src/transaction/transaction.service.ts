import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TransactionService {
  constructor(private readonly prisma: PrismaService) {}

  async performTransaction(senderId: number, receiverId: number, amount: number) {
    console.log('senderId:', senderId);
    console.log('receiverId:', receiverId);
  
    if (!senderId || !receiverId) {
      throw new Error('senderId or receiverId is invalid');
    }
  
    return this.prisma.$transaction(async (tx) => {
      // Validar que ambos usuarios existan
      const sender = await tx.account.findUnique({
        where: {
          id: senderId,
        }
      });
  
      const receiver = await tx.account.findUnique({
        where: {
          id: receiverId,
        }
      });
  
      console.log('sender:', sender);
      console.log('receiver:', receiver);
  
      if (!sender || !receiver) {
        throw new Error('Sender or receiver not found');
      }
  
      // Actualizar saldos
      await tx.account.update({
        where: { id: senderId },
        data: { balance: sender.balance - amount },
      });
  
      await tx.account.update({
        where: { id: receiverId },
        data: { balance: receiver.balance + amount },
      });
  
      return { success: true };
    });
  }
  
  
}
