import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationFormComponent } from './vacation-form.component';

describe('VacationFormComponent', () => {
  let component: VacationFormComponent;
  let fixture: ComponentFixture<VacationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
