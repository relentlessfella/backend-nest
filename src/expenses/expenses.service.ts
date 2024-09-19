import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Transaction } from '@prisma/client';

@Injectable()
export class ExpensesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.transaction.findMany();
  }

  async create(data: {
    dateTime: Date;
    sum: number;
    category: string;
    comment: string;
    author: string;
  }) {
    return this.prisma.transaction.create({
      data: {
        dateTime: data.dateTime,
        sum: data.sum,
        category: data.category,
        comment: data.comment,
        author: data.author,
      },
    });
  }

  async remove(where: Prisma.TransactionWhereUniqueInput) {
    return this.prisma.transaction.delete({
      where,
    });
  }

  //   private expenses = [
  //     { id: 1, dateTime: '2022-01-01', author: 'Steve Jobs', sum: 100 },
  //   ];

  //   createExpense(createExpenseDto: {
  //     dateTime: string;
  //     author: string;
  //     sum: number;
  //   }) {
  //     const newExpense = {
  //       id: this.expenses.length + 1,
  //       ...createExpenseDto,
  //     };
  //     this.expenses.push(newExpense);
  //     return newExpense;
  //   }
}
