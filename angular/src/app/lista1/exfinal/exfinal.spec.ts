import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exfinal } from './exfinal';

describe('Exfinal', () => {
  let component: Exfinal;
  let fixture: ComponentFixture<Exfinal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exfinal],
    }).compileComponents();

    fixture = TestBed.createComponent(Exfinal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
