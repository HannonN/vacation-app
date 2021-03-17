import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationCardComponent } from './vacation-card.component';

describe('VacationCardComponent', () => {
  let component: VacationCardComponent;
  let fixture: ComponentFixture<VacationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
