import { TestBed } from '@angular/core/testing';

import { AnswerValidationService } from './answer-validation.service';

describe('AnswerValidationService', () => {
  let service: AnswerValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
