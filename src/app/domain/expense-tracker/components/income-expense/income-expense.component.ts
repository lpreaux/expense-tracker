import { Component } from "@angular/core";
import { ExpenseTrackerService } from "../../expense-tracker.service";

@Component({
  selector: "expense-tracker-income-expense",
  templateUrl: "./income-expense.component.html",
})
export class IncomeExpenseComponent {
  constructor(protected expenseTracker: ExpenseTrackerService) {}
}
