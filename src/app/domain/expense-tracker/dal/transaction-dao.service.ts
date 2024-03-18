import { Injectable } from "@angular/core";
import {
  IndexedDbService,
  StoreCreationObject,
} from "../../../db/indexed-db.service";
import { Transaction } from "../models/transaction";

@Injectable({
  providedIn: "root",
})
export class TransactionDaoService {
  dbStoreDefinition: StoreCreationObject = {
    name: "Transaction",
    options: {
      keyPath: "id",
      autoIncrement: true,
    },
    indexes: [{ name: "type", keyPath: "type", options: { unique: false } }],
  };

  constructor(private indexedDb: IndexedDbService) {
    indexedDb.addStoreDef(this.dbStoreDefinition);
  }

  findAll() {
    return this.indexedDb.getAll<Transaction>(this.dbStoreDefinition.name);
  }

  createOne(transaction: Omit<Transaction, "id">) {
    return this.indexedDb.put<Transaction>(
      this.dbStoreDefinition.name,
      undefined,
      transaction
    );
  }
}
