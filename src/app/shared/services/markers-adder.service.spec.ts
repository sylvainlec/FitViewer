import { TestBed } from '@angular/core/testing';

import { MarkersAdderService } from './markers-adder.service';

describe('MarkersAdderService', () => {
  let service: MarkersAdderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkersAdderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
