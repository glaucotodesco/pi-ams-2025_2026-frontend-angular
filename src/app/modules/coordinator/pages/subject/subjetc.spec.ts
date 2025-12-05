import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared-module';
import { SubjetcPage } from './subjetc';



describe('SubjetcPage', () => {
  let component: SubjetcPage;
  let fixture: ComponentFixture<SubjetcPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjetcPage],
      imports: [FormsModule, NgbModule, SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjetcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});
