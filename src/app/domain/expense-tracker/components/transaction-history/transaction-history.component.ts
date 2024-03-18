import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { OverlayScrollbarsDirective } from "overlayscrollbars-ngx";

@Component({
  selector: "expense-tracker-transaction-history",
  templateUrl: "./transaction-history.component.html",
  styles: `
    :host {
      @apply relative;
    }
  `,
})
export class TransactionHistoryComponent implements AfterViewInit {
  @ViewChild("transactionListComponent", {
    read: OverlayScrollbarsDirective,
  })
  transactionListComponent?: OverlayScrollbarsDirective;
  @ViewChild("transactionListComponent", { read: ElementRef })
  transactionListElement?: ElementRef;

  scrollOptions: any = {
    scrollbars: {
      autoHide: "leave",
    },
  };

  ngAfterViewInit() {
    if (!this.transactionListElement) {
      return;
    }
    this.transactionListComponent?.osInitialize({
      target: this.transactionListElement.nativeElement,
    });
  }
}
