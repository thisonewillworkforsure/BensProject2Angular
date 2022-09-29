import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserComponent } from './register-user.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
fdescribe('RegisterUserComponent', () => {
  let component: RegisterUserComponent;
  let fixture: ComponentFixture<RegisterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUserComponent ],
      imports: [HttpClientTestingModule,],
      providers:[FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the title displayed', () => {
    // const fixture = TestBed.createComponent(AppComponent);
     //fixture.detectChanges();
     const compiled = fixture.nativeElement as HTMLElement;
     expect(compiled.querySelector('div')?.textContent).toContain("REGISTER");
   });

   it('should give reactive form controls calling getter f', ()=>{
    expect(component.f['username'].value).toEqual('');
   });


});
