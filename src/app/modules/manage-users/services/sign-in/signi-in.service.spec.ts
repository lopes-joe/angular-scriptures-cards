import { TestBed } from '@angular/core/testing';

import { SigniInService } from './signi-in.service';

describe('SigniInService', () => {
  let service: SigniInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigniInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
