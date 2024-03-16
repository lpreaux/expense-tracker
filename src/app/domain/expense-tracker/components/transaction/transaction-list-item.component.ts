import { Component, Input } from "@angular/core";
import { Transaction } from "../../models/transaction";

@Component({
  selector: "app-transaction",
  standalone: false,
  templateUrl: "./transaction-list-item.component.html",
})
export class TransactionListItemComponent {
  @Input() transaction!: Transaction;
}
