import { TestBed } from '@angular/core/testing';

import { HttpSimulationService } from './http-simulation.service';

describe('HttpSimulationService', () => {
  let service: HttpSimulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSimulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
