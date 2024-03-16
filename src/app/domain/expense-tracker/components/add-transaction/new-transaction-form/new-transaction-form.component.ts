import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Transaction } from "../../../models/transaction";
import { CustomValidators } from "../../../../../shared/custom-validators";

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
  selector: "expense-tracker-new-transaction-form",
  templateUrl: "./new-transaction-form.component.html",
})
export class NewTransactionFormComponent implements OnInit {
  @Input() initialTransaction?: Partial<Transaction>;
  @Output() transactionSubmitted = new EventEmitter<Partial<Transaction>>();
  @ViewChild("labelInput") labelInputRef!: ElementRef;
  @ViewChild("amountInput") amountInput!: ElementRef;

  newTransactionForm!: FormGroup<NewTransactionForm>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.newTransactionForm = this.formBuilder.nonNullable.group({
      label: ["", [Validators.required, Validators.minLength(3)]],
      amount: [0, [Validators.required, CustomValidators.differentThanZero()]],
    });
  }
  onNewTransactionSubmit() {
    this.transactionSubmitted.emit(
      formValueToTransaction(
        this.newTransactionForm.value as NewTransactionFormValue
      )
    );
    this.newTransactionForm.reset();
    this.labelInputRef.nativeElement.focus();
  }

  onAmountInputFocus() {
    this.amountInput.nativeElement.select();
  }
}
