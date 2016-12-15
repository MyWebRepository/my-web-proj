/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputExampleComponent } from './input-example.component';

describe('InputExampleComponent', () => {
  let component: InputExampleComponent;
  let fixture: ComponentFixture<InputExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
