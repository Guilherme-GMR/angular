import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex14b } from './ex14b';

describe('Ex14b', () => {
  let component: Ex14b;
  let fixture: ComponentFixture<Ex14b>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex14b],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex14b);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
