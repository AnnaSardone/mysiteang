/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sub_headerComponent } from './sub_header.component';

describe('Sub_headerComponent', () => {
  let component: Sub_headerComponent;
  let fixture: ComponentFixture<Sub_headerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sub_headerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sub_headerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
