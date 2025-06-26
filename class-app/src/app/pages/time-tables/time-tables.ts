import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-time-tables',
  templateUrl: './time-tables.html',
  styleUrls: ['./time-tables.css'],
  standalone: true,
  imports: [CommonModule],
})
export class TimeTablesComponent {
  subjects = ['Maths', 'ICT', 'History', 'Science', 'English'];

  timetables: { [key: string]: string[] } = {
    Maths: [
      'Monday - 9:00 AM to 10:00 AM',
      'Wednesday - 10:00 AM to 11:00 AM',
      'Friday - 8:00 AM to 9:00 AM'
    ],
    ICT: [
      'Tuesday - 11:00 AM to 12:00 PM',
      'Thursday - 1:00 PM to 2:00 PM'
    ],
    History: [
      'Monday - 2:00 PM to 3:00 PM',
      'Wednesday - 3:00 PM to 4:00 PM'
    ],
    Science: [
      'Tuesday - 9:00 AM to 10:00 AM',
      'Thursday - 10:00 AM to 11:00 AM'
    ],
    English: [
      'Friday - 1:00 PM to 2:00 PM',
      'Monday - 11:00 AM to 12:00 PM'
    ]
  };

  selectedSubject: string = '';
  selectedTimetable: string[] = [];

  selectSubject(subject: string) {
    this.selectedSubject = subject;
    this.selectedTimetable = this.timetables[subject] || [];
  }
}
