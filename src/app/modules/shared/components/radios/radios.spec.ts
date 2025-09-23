import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Radios } from './radios';

describe('Radios', () => {
  let component: Radios;
  let fixture: ComponentFixture<Radios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Radios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Radios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
