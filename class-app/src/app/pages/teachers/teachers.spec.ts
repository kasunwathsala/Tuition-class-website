import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersComponent  } from './teachers';

describe('TeachersComponent', () => {
  let component: TeachersComponent;
  let fixture: ComponentFixture<TeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
