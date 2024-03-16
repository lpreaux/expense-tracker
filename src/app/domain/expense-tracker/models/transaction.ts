export interface Transaction {
  id: number;
  label: string;
  type: "EXPENSE" | "INCOME";
  amount: number;
}
