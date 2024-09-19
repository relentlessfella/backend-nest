import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { Logger } from '@nestjs/common';
import { Transaction as TransactionModel } from '@prisma/client';

const logger = new Logger('expenses');

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly ExpensesService: ExpensesService) {}

  @Get()
  getExpenses() {
    return this.ExpensesService.findAll();
  }

  @Post()
  createExpense(
    @Body()
    createExpenseDto: {
      dateTime: Date;
      sum: number;
      category: string;
      comment: string;
      author: string;
    },
  ) {
    return this.ExpensesService.create(createExpenseDto);
  }

  @Delete('transaction/:id')
  async removeExpense(@Param('id') id: string): Promise<TransactionModel> {
    logger.log('new log');
    return this.ExpensesService.remove({ id: Number(id) });
  }
}
