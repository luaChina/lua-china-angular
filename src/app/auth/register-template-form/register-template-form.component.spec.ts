import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTemplateFormComponent } from './register-template-form.component';

describe('RegisterTemplateFormComponent', () => {
  let component: RegisterTemplateFormComponent;
  let fixture: ComponentFixture<RegisterTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
