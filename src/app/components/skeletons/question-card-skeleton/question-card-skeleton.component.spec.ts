import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCardSkeletonComponent } from './question-card-skeleton.component';

describe('QuestionCardSkeletonComponent', () => {
  let component: QuestionCardSkeletonComponent;
  let fixture: ComponentFixture<QuestionCardSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionCardSkeletonComponent]
    });
    fixture = TestBed.createComponent(QuestionCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
