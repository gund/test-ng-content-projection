/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HasInnerComponent } from './has-inner.component';

describe('HasInnerComponent', () => {
  let component: HasInnerComponent;
  let fixture: ComponentFixture<HasInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HasInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HasInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
