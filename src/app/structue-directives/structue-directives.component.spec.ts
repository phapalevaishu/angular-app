import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructueDirectivesComponent } from './structue-directives.component';

describe('StructueDirectivesComponent', () => {
  let component: StructueDirectivesComponent;
  let fixture: ComponentFixture<StructueDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StructueDirectivesComponent]
    });
    fixture = TestBed.createComponent(StructueDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
