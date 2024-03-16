import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TransactionListItemComponent } from "./components/transaction-history/transaction-list-item/transaction-list-item.component";
import { ExpenseTrackerService } from "./expense-tracker.service";
import { ReactiveFormsModule } from "@angular/forms";
import { ExpenseTrackerComponent } from "./expense-tracker.component";
import { HeaderComponent } from "./components/header/header.component";
import { BalanceComponent } from "./components/balance/balance.component";
import { IncomeExpenseComponent } from "./components/income-expense/income-expense.component";
import { TransactionHistoryComponent } from "./components/transaction-history/transaction-history.component";
import { AddTransactionComponent } from "./components/add-transaction/add-transaction.component";
import { TransactionListComponent } from './components/transaction-history/transaction-list/transaction-list.component';
import { NewTransactionFormComponent } from './components/add-transaction/new-transaction-form/new-transaction-form.component';

@NgModule({
  declarations: [
    ExpenseTrackerComponent,
    TransactionListItemComponent,
    HeaderComponent,
    BalanceComponent,
    IncomeExpenseComponent,
    TransactionHistoryComponent,
    AddTransactionComponent,
    TransactionListComponent,
    NewTransactionFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [ExpenseTrackerService],
  exports: [ExpenseTrackerComponent],
})
export class ExpenseTrackerModule {}
