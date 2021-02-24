import { TestBed } from '@angular/core/testing';

import { WheaterMapService } from './wheater-map.service';

describe('WheaterMapService', () => {
  let service: WheaterMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheaterMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
