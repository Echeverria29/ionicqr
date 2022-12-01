import { TestBed } from '@angular/core/testing';

import { CrudCursoprofesorService } from './crud-cursoprofesor.service';

describe('CrudCursoprofesorService', () => {
  let service: CrudCursoprofesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudCursoprofesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
