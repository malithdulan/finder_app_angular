import { TestBed } from '@angular/core/testing';

import { VehicleSecurityService } from './vehicle-security.service';

describe('VehicleSecurityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleSecurityService = TestBed.get(VehicleSecurityService);
    expect(service).toBeTruthy();
  });
});
