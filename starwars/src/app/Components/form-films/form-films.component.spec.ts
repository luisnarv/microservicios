import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFilmsComponent } from './form-films.component';

describe('FormFilmsComponent', () => {
  let component: FormFilmsComponent;
  let fixture: ComponentFixture<FormFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFilmsComponent]
    });
    fixture = TestBed.createComponent(FormFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
