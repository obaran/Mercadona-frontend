import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModalComponent } from './login-modal.component';

describe('LoginModalComponent', () => {
  let component: LoginModalComponent;
  let fixture: ComponentFixture<LoginModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginModalComponent]
    });
    fixture = TestBed.createComponent(LoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have username and password input fields', () => {
    const compiled = fixture.debugElement.nativeElement;
    const usernameInput = compiled.querySelector('input[name="username"]');
    const passwordInput = compiled.querySelector('input[name="password"]');
    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });
  
});
