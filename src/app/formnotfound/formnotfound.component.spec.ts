import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormnotfoundComponent } from './formnotfound.component';

describe('FormnotfoundComponent', () => {
  let component: FormnotfoundComponent;
  let fixture: ComponentFixture<FormnotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormnotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
