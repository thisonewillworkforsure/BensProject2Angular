import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordComponent } from './reset-password.component';
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';

fdescribe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;
  let fb: FormBuilder;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,]
      ,declarations: [ ResetPasswordComponent,],
      providers:[FormBuilder]
    })
    .compileComponents();

    let fb = TestBed.inject<FormBuilder>(FormBuilder);
    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should output 1 after one button click`, () => {
    let register = fixture.componentInstance;
    register.handleButtonClick();
    expect(register.buttonStatus).toEqual(1);
  });

  it('should have the title displayed', () => {
   // const fixture = TestBed.createComponent(AppComponent);
    //fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.textContent).toContain("Change");
  });
});
