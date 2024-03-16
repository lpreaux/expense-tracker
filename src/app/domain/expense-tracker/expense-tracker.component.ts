import { booleanAttribute, Component, Input } from "@angular/core";

@Component({
  styles: `
    :host {
      @apply block mx-auto max-w-md my-1 px-2;
    }
  `,
  selector: "app-expense-tracker",
  standalone: false,
  templateUrl: "./expense-tracker.component.html",
})
export class ExpenseTrackerComponent {
  @Input({ transform: booleanAttribute }) showIncomeExpense: boolean = false;
  @Input({ transform: booleanAttribute }) showTransactionHistory: boolean =
    false;
  @Input({ transform: booleanAttribute }) showAddTransaction: boolean = false;
}
