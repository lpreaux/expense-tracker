import { computed, Injectable, signal, WritableSignal } from "@angular/core";
import { Transaction } from "./models/transaction";
import _ from "lodash";
import { TransactionDaoService } from "./dal/transaction-dao.service";

@Injectable()
export class ExpenseTrackerService {
  transactions: WritableSignal<Transaction[]> = signal<Transaction[]>([], {
    equal: _.isEqual,
  });
  balance = computed<number>(() =>
    this.transactions()
      .map(transaction => {
        switch (transaction.type) {
          case "EXPENSE":
            return transaction.amount * -1;
          case "INCOME":
            return transaction.amount;
        }
      })
      .reduce((acc, value) => {
        return acc + value;
      }, 0)
  );
  income = computed<number>(() =>
    this.transactions()
      .filter(transaction => transaction.type === "INCOME")
      .map(transaction => transaction.amount)
      .reduce((acc, value) => {
        return acc + value;
      }, 0)
  );
  expense = computed<number>(() =>
    this.transactions()
      .filter(transaction => transaction.type === "EXPENSE")
      .map(transaction => transaction.amount)
      .reduce((acc, value) => {
        return acc + value;
      }, 0)
  );

  constructor(private transactionDao: TransactionDaoService) {}

  updateTransactions() {
    this.transactionDao.findAll().subscribe(this.transactions.set);
  }

  addTransaction(transactionData: Partial<Transaction>) {
    if (typeof transactionData.label != "string")
      throw "label should not be undefined";
    if (transactionData.type != "INCOME" && transactionData.type != "EXPENSE")
      throw "type should be equal to 'INCOME' or 'EXPENSE'";
    if (typeof transactionData.amount != "number")
      throw "amount should be a number";

    const transaction: Omit<Transaction, "id"> = {
      label: transactionData.label,
      type: transactionData.type,
      amount: transactionData.amount,
    };
    this.transactionDao
      .createOne(transaction)
      .subscribe(() => this.updateTransactions());
  }
}
