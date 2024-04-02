import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalAgeComponent } from './cal-age.component';

describe('CalAgeComponent', () => {
  let component: CalAgeComponent;
  let fixture: ComponentFixture<CalAgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalAgeComponent]
    });
    fixture = TestBed.createComponent(CalAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
