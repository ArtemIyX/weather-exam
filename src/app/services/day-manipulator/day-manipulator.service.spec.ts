import { TestBed } from '@angular/core/testing';

import { DayManipulatorService } from './day-manipulator.service';

describe('DayManipulatorService', () => {
  let service: DayManipulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayManipulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
