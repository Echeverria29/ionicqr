import { TestBed } from '@angular/core/testing';

import { CrudCursoalumnoService } from './crud-cursoalumno.service';

describe('CrudCursoalumnoService', () => {
  let service: CrudCursoalumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudCursoalumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
