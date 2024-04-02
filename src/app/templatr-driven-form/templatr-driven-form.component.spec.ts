import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatrDrivenFormComponent } from './templatr-driven-form.component';

describe('TemplatrDrivenFormComponent', () => {
  let component: TemplatrDrivenFormComponent;
  let fixture: ComponentFixture<TemplatrDrivenFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatrDrivenFormComponent]
    });
    fixture = TestBed.createComponent(TemplatrDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
