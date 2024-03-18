import { TestBed } from '@angular/core/testing';

import { TransactionDaoService } from './transaction-dao.service';

describe('TransactionDaoService', () => {
  let service: TransactionDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
