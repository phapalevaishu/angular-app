import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventExComponent } from './event-ex.component';

describe('EventExComponent', () => {
  let component: EventExComponent;
  let fixture: ComponentFixture<EventExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventExComponent]
    });
    fixture = TestBed.createComponent(EventExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
