import { TestBed } from '@angular/core/testing';

import { NotyficationService } from './notyfication-service';

describe('NotyficationService', () => {
  let service: NotyficationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotyficationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
