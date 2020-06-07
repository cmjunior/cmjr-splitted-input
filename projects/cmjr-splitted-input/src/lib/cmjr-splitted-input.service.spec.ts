import { TestBed } from '@angular/core/testing';

import { CmjrSplittedInputService } from './cmjr-splitted-input.service';

describe('CmjrSplittedInputService', () => {
  let service: CmjrSplittedInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmjrSplittedInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
