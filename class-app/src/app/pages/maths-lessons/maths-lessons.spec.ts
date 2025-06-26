import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsLessons } from './maths-lessons';

describe('MathsLessons', () => {
  let component: MathsLessons;
  let fixture: ComponentFixture<MathsLessons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathsLessons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathsLessons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
