import { TestBed } from '@angular/core/testing';

import { PageManagementService } from './page-management.service';

describe('PageManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageManagementService = TestBed.get(PageManagementService);
    expect(service).toBeTruthy();
  });
});
