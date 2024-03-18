import { booleanAttribute, Component, Input, OnInit } from "@angular/core";
import { ExpenseTrackerService } from "./expense-tracker.service";
import { IndexedDbService } from "../../db/indexed-db.service";
import { first } from "rxjs";

@Component({
  styles: `
    :host {
      @apply block w-full h-full;
    }
  `,
  selector: "app-expense-tracker",
  standalone: false,
  templateUrl: "./expense-tracker.component.html",
})
export class ExpenseTrackerComponent implements OnInit {
  @Input({ transform: booleanAttribute }) showIncomeExpense: boolean = false;
  @Input({ transform: booleanAttribute }) showTransactionHistory: boolean =
    false;
  @Input({ transform: booleanAttribute }) showAddTransaction: boolean = false;

  constructor(
    private expenseTracker: ExpenseTrackerService,
    private indexedDb: IndexedDbService
  ) {}

  ngOnInit() {
    this.indexedDb.db
      .pipe(first(value => value != undefined))
      .subscribe(() => this.expenseTracker.updateTransactions());
  }
}
