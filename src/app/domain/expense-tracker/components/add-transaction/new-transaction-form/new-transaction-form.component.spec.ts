import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransactionFormComponent } from './new-transaction-form.component';

describe('NewTransactionFormComponent', () => {
  let component: NewTransactionFormComponent;
  let fixture: ComponentFixture<NewTransactionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTransactionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewTransactionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
