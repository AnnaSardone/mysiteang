/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Menu_verticalComponent } from './menu_vertical.component';

describe('Menu_verticalComponent', () => {
  let component: Menu_verticalComponent;
  let fixture: ComponentFixture<Menu_verticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu_verticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu_verticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
