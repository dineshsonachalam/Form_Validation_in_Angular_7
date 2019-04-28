import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCreateComponent } from './signup-create.component';

describe('SignupCreateComponent', () => {
  let component: SignupCreateComponent;
  let fixture: ComponentFixture<SignupCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
