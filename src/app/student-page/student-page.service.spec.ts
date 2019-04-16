import { TestBed } from '@angular/core/testing';

import { StudentPageService } from './student-page.service';

describe('StudentPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentPageService = TestBed.get(StudentPageService);
    expect(service).toBeTruthy();
  });
});
