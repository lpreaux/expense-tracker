import { computed, Injectable, signal, WritableSignal } from "@angular/core";
import { Transaction } from "./models/transaction";
import _ from "lodash";

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

  constructor() {}

  addTransaction(transactionData: Partial<Transaction>) {
    let transaction = {
      id: this.getLastId() + 1,
    } as Transaction;
    transaction = Object.assign(transaction, transactionData);
    this.transactions.update(transactions => {
      return [...transactions, transaction];
    });
  }

  private getLastId() {
    const initalId = 0;
    return this.transactions()
      .map(transaction => transaction.id)
      .reduce((acc, id) => (acc >= id ? acc : id), initalId);
  }
}
