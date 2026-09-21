import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex14a } from './ex14a';

describe('Ex14a', () => {
  let component: Ex14a;
  let fixture: ComponentFixture<Ex14a>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex14a],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex14a);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
