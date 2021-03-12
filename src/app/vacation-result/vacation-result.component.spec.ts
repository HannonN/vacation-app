import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationResultComponent } from './vacation-result.component';

describe('VacationResultComponent', () => {
  let component: VacationResultComponent;
  let fixture: ComponentFixture<VacationResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
