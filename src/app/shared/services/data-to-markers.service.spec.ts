import { TestBed } from '@angular/core/testing';

import { DataToMarkersService } from './data-to-markers.service';

describe('DataToMarkersService', () => {
  let service: DataToMarkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataToMarkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
