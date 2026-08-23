import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateAccountUser } from './activate-account-user';

describe('ActivateAccountUser', () => {
  let component: ActivateAccountUser;
  let fixture: ComponentFixture<ActivateAccountUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivateAccountUser],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivateAccountUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
