import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTables } from './time-tables';

describe('TimeTables', () => {
  let component: TimeTables;
  let fixture: ComponentFixture<TimeTables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeTables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeTables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
