import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TransactionListItemComponent } from "./components/transaction/transaction-list-item.component";

@NgModule({
  declarations: [TransactionListItemComponent],
  imports: [CommonModule],
  exports: [TransactionListItemComponent],
})
export class ExpenseTrackerModule {}
