import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ExpenseTrackerModule } from "./domain/expense-tracker/expense-tracker.module";
import { IndexedDbService } from "./db/indexed-db.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ExpenseTrackerModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "expense-tracker";

  constructor(db: IndexedDbService) {}
}