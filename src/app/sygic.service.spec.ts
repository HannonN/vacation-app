import { TestBed } from '@angular/core/testing';

import { SygicService } from './sygic.service';

describe('SygicService', () => {
  let service: SygicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SygicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
