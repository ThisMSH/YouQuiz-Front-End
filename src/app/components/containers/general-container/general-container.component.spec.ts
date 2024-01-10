import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralContainerComponent } from './general-container.component';

describe('GeneralContainerComponent', () => {
  let component: GeneralContainerComponent;
  let fixture: ComponentFixture<GeneralContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralContainerComponent]
    });
    fixture = TestBed.createComponent(GeneralContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
