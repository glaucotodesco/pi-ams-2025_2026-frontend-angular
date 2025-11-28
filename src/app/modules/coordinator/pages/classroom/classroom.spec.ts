import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Classroom } from './classroom';

describe('Classroom', () => {
  let component: Classroom;
  let fixture: ComponentFixture<Classroom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Classroom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Classroom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
