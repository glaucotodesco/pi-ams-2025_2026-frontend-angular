import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaModal } from './sala-modal';

describe('SalaModal', () => {
  let component: SalaModal;
  let fixture: ComponentFixture<SalaModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalaModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
