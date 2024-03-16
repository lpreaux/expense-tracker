import { Component, Input } from "@angular/core";
import { Transaction } from "../../../models/transaction";

@Component({
  selector: "expense-tracker-transaction-list-item",
  standalone: false,
  templateUrl: "./transaction-list-item.component.html",
})
export class TransactionListItemComponent {
  colorVariants: { [key: string]: string } = {
    EXPENSE: "border-r-red-600",
    INCOME: "border-r-green-600",
  } as const;

  @Input() transaction!: Transaction;

  getCardClass() {
    return `py-3 px-2 flex justify-between bg-slate-100 border-r-8 ${this.colorVariants[this.transaction.type]}`;
  }
}
