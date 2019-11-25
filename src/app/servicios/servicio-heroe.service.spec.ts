import { TestBed } from '@angular/core/testing';

import { ServicioHeroeService } from './servicio-heroe.service';

describe('ServicioHeroeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioHeroeService = TestBed.get(ServicioHeroeService);
    expect(service).toBeTruthy();
  });
});
