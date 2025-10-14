import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curriculum } from './curriculum';

describe('Curriculum', () => {
  let component: Curriculum;
  let fixture: ComponentFixture<Curriculum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Curriculum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curriculum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
