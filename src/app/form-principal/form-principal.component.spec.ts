import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrincipalComponent } from './form-principal.component';

describe('FormPrincipalComponent', () => {
  let component: FormPrincipalComponent;
  let fixture: ComponentFixture<FormPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
