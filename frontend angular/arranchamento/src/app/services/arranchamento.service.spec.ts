import { TestBed } from '@angular/core/testing';

import { ArranchamentoService } from './arranchamento.service';

describe('ArranchamentoService', () => {
  let service: ArranchamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArranchamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
