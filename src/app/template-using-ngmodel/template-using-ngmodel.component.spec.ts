import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateUsingNgmodelComponent } from './template-using-ngmodel.component';

describe('TemplateUsingNgmodelComponent', () => {
  let component: TemplateUsingNgmodelComponent;
  let fixture: ComponentFixture<TemplateUsingNgmodelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateUsingNgmodelComponent]
    });
    fixture = TestBed.createComponent(TemplateUsingNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
