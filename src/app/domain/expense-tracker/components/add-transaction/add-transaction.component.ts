import { Component } from "@angular/core";
import { ExpenseTrackerService } from "../../expense-tracker.service";
import { Transaction } from "../../models/transaction";

@Component({
  selector: "expense-tracker-add-transaction",
  templateUrl: "./add-transaction.component.html",
})
export class AddTransactionComponent {
  constructor(protected expenseTracker: ExpenseTrackerService) {}

  protected saveNewTransaction(transaction: Partial<Transaction>) {
    this.expenseTracker.addTransaction(transaction);
  }
}
