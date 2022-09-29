import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersComponent } from './list-users.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
fdescribe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;
  let httpMock: HttpTestingController
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUsersComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUsersComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have a container", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.classList).toContain("container");
  });

  it("should have a table class", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')?.classList).toContain("table");
  });
});
