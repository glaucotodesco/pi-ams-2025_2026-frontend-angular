import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayout } from './page-layout';

describe('PageLayout', () => {
  let component: PageLayout;
  let fixture: ComponentFixture<PageLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
