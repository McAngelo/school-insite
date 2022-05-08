import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsTimetableComponent } from './exams-timetable.component';

describe('ExamsTimetableComponent', () => {
  let component: ExamsTimetableComponent;
  let fixture: ComponentFixture<ExamsTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamsTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
