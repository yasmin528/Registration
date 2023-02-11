import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUPComponent } from './sign-up.component';

describe('SignUPComponent', () => {
  let component: SignUPComponent;
  let fixture: ComponentFixture<SignUPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
