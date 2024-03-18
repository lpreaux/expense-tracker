import { Component } from "@angular/core";

@Component({
  selector: "expense-tracker-transaction-history",
  templateUrl: "./transaction-history.component.html",
  styles: `
    :host {
      @apply relative;
    }
  `,
})
export class TransactionHistoryComponent {}
