import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmaticoperationComponent } from './arithmaticoperation.component';

describe('ArithmaticoperationComponent', () => {
  let component: ArithmaticoperationComponent;
  let fixture: ComponentFixture<ArithmaticoperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArithmaticoperationComponent]
    });
    fixture = TestBed.createComponent(ArithmaticoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
