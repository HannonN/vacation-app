import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationDestinationComponent } from './vacation-destination.component';

describe('VacationDestinationComponent', () => {
  let component: VacationDestinationComponent;
  let fixture: ComponentFixture<VacationDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
