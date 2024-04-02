import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownExComponent } from './dropdown-ex.component';

describe('DropdownExComponent', () => {
  let component: DropdownExComponent;
  let fixture: ComponentFixture<DropdownExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownExComponent]
    });
    fixture = TestBed.createComponent(DropdownExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
