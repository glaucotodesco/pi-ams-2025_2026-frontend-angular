import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaComponent } from './sala.component';

describe('Sala', () => {
  let component: SalaComponent;
  let fixture: ComponentFixture<SalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
