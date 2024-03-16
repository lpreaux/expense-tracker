import { Component } from "@angular/core";
import { ExpenseTrackerService } from "../../expense-tracker.service";

@Component({
  selector: "expense-tracker-balance",
  templateUrl: "./balance.component.html",
})
export class BalanceComponent {
  constructor(protected expenseTracker: ExpenseTrackerService) {}
}
