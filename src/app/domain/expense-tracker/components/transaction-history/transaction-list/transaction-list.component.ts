import { Component } from "@angular/core";
import { ExpenseTrackerService } from "../../../expense-tracker.service";

@Component({
  selector: "expense-tracker-transaction-list",
  templateUrl: "./transaction-list.component.html",
})
export class TransactionListComponent {
  constructor(protected expenseTracker: ExpenseTrackerService) {}
}
