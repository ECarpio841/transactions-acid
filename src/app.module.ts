import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TransactionModule } from './transaction/transaction.module';
import { TransactionService } from './transaction/transaction.service';
import { TransactionController } from './transaction/transaction.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PrismaModule, TransactionModule],
  providers: [TransactionService, PrismaService],
  controllers: [TransactionController],
})
export class AppModule {}
