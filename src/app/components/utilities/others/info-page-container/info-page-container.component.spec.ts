import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPageContainerComponent } from './info-page-container.component';

describe('InfoPageContainerComponent', () => {
  let component: InfoPageContainerComponent;
  let fixture: ComponentFixture<InfoPageContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoPageContainerComponent]
    });
    fixture = TestBed.createComponent(InfoPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
