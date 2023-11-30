import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayInputModuleComponent } from './two-way-input-module.component';

describe('TwoWayInputModuleComponent', () => {
  let component: TwoWayInputModuleComponent;
  let fixture: ComponentFixture<TwoWayInputModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoWayInputModuleComponent]
    });
    fixture = TestBed.createComponent(TwoWayInputModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
