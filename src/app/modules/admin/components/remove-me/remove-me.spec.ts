import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveMe } from './remove-me';

describe('RemoveMe', () => {
  let component: RemoveMe;
  let fixture: ComponentFixture<RemoveMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoveMe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveMe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
