import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelExComponent } from './ngmodel-ex.component';

describe('NgmodelExComponent', () => {
  let component: NgmodelExComponent;
  let fixture: ComponentFixture<NgmodelExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgmodelExComponent]
    });
    fixture = TestBed.createComponent(NgmodelExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
