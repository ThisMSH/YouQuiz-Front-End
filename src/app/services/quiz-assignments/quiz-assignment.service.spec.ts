import { TestBed } from '@angular/core/testing';

import { QuizAssignmentService } from './quiz-assignment.service';

describe('QuizAssignmentService', () => {
  let service: QuizAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
