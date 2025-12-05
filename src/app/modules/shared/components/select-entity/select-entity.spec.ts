import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEntityComponent } from './select-entity';

describe('SelectComponent', () => {
  let component: SelectEntityComponent;
  let fixture: ComponentFixture<SelectEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectEntityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
