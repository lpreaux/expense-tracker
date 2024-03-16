import { Component, OnInit } from "@angular/core";
import { ExpenseTrackerService } from "./expense-tracker.service";
import { CurrencyPipe, DecimalPipe, JsonPipe } from "@angular/common";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Transaction } from "./models/transaction";
import { ExpenseTrackerModule } from "./expense-tracker.module";

interface NewTransactionForm {
  label: FormControl<string>;
  amount: FormControl<number>;
}

interface NewTransactionFormValue {
  label: string;
  amount: number;
}
const formValueToTransaction = (
  formValue: NewTransactionFormValue
): Partial<Transaction> => {
  return {
    label: formValue.label,
    type: formValue.amount < 0 ? "EXPENSE" : "INCOME",
    amount: Math.abs(formValue.amount),
  };
};
@Component({
  selector: "app-expense-tracker",
  standalone: true,
  imports: [
    JsonPipe,
    CurrencyPipe,
    DecimalPipe,
    ReactiveFormsModule,
    ExpenseTrackerModule,
  ],
  providers: [ExpenseTrackerService],
  templateUrl: "./expense-tracker.component.html",
})
export class ExpenseTrackerComponent implements OnInit {
  newTransactionForm!: FormGroup<NewTransactionForm>;

  constructor(
    protected expenseTracker: ExpenseTrackerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.newTransactionForm = this.formBuilder.nonNullable.group({
      label: ["", Validators.required],
      amount: [0, Validators.required],
    });
  }

  onNewTransactionSubmit() {
    this.expenseTracker.addTransaction(
      formValueToTransaction(
        this.newTransactionForm.value as NewTransactionFormValue
      )
    );
    this.newTransactionForm.reset();
  }
}
