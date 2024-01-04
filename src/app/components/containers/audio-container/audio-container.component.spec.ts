import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioContainerComponent } from './audio-container.component';

describe('AudioContainerComponent', () => {
  let component: AudioContainerComponent;
  let fixture: ComponentFixture<AudioContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudioContainerComponent]
    });
    fixture = TestBed.createComponent(AudioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
