import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTemplateComponent } from './modal-template.component';

describe('ModalTemplateComponent', () => {
  let component: ModalTemplateComponent;
  let fixture: ComponentFixture<ModalTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalTemplateComponent]
    });
    fixture = TestBed.createComponent(ModalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
