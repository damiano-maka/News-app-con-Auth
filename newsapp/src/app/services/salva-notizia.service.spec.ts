import { TestBed } from '@angular/core/testing';

import { SalvaNotiziaService } from './salva-notizia.service';

describe('SalvaNotiziaService', () => {
  let service: SalvaNotiziaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalvaNotiziaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
