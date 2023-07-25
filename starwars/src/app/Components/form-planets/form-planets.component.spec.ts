import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlanetsComponent } from './form-planets.component';

describe('FormPlanetsComponent', () => {
  let component: FormPlanetsComponent;
  let fixture: ComponentFixture<FormPlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPlanetsComponent]
    });
    fixture = TestBed.createComponent(FormPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
