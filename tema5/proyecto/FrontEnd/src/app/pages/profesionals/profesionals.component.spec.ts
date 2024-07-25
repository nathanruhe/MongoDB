import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalsComponent } from './profesionals.component';

describe('ProfesionalsComponent', () => {
  let component: ProfesionalsComponent;
  let fixture: ComponentFixture<ProfesionalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesionalsComponent]
    });
    fixture = TestBed.createComponent(ProfesionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
