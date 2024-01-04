import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadContainerComponent } from './head-container.component';

describe('HeadContainerComponent', () => {
  let component: HeadContainerComponent;
  let fixture: ComponentFixture<HeadContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadContainerComponent]
    });
    fixture = TestBed.createComponent(HeadContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
