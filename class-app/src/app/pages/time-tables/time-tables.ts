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
  subjects = ['Maths', 'ICT', 'History', 'Biology', 'English', 'Economics', 'Accounting', 'Geography', 'Chemistry'];

  timetables: { [key: string]: string[] } = {
    Maths: [
      ' Kasun Nilaweera Sir - Monday - 9:00 AM to 10:00 AM : 2026 Theory',
      ' Kasun Nilaweera Sir - Wednesday - 10:00 AM to 11:00 AM : 2025 Revision',
      ' Kasun Nilaweera Sir - Monday - 9:00 AM to 10:00 AM : 2026 Theory',
      ' Kasun Nilaweera Sir - Wednesday - 10:00 AM to 11:00 AM : 2024 Revision',
      ' Kasun Nilaweera Sir - Friday - 8:00 AM to 9:00 AM : 2023 Paper Discussion'
    ],
    ICT: [
      ' Pawani Rajasinghe Mis - Monday - 9:00 AM to 10:00 AM : 2026 Theory',
      ' Pawani Rajasinghe Mis  - Wednesday - 10:00 AM to 11:00 AM : 2025 Revision',
      ' Pawani Rajasinghe Mis - Monday - 9:00 AM to 10:00 AM : 2026 Theory',
      ' Pawani Rajasinghe Mis  - Wednesday - 10:00 AM to 11:00 AM : 2025 Revision',
      ' Pawani Rajasinghe Mis  - Friday - 8:00 AM to 9:00 AM : 2025 Paper Discussion'
    ],
    History: [
      ' Janaka weerasinghe Sir - Monday - 9:00 AM to 10:00 AM : 2026 Theory',
      ' Janaka weerasinghe Sir - Wednesday - 10:00 AM to 11:00 AM : 2025 Revision',
      ' Janaka weerasinghe Sir - Monday - 9:00 AM to 10:00 AM : 2026 Theory',
      ' Janaka weerasinghe Sir - Wednesday - 10:00 AM to 11:00 AM : 2025 Revision',
      ' Janaka weerasinghe  Sir - Friday - 8:00 AM to 9:00 AM : 2025 Paper Discussion'
    ],
    Biology: [
      ' Amal Jayasinghe Sir - Monday - 9:00 AM to 10:00 AM : 2026 Theory',
      ' Amal Jayasinghe Sir - Wednesday - 10:00 AM to 11:00 AM : 2025 Revision',
      ' Amal Jayasinghe Sir - Monday - 9:00 AM to 10:00 AM : 2026 Theory',
      ' Amal Jayasinghe Sir - Wednesday - 10:00 AM to 11:00 AM : 2025 Revision',
      ' Amal Jayasinghe Sir - Friday - 8:00 AM to 9:00 AM : 2025 Paper Discussion'
    ],
    English: [
      ' Kamal Perera Sir - Monday - 9:00 AM to 10:00 AM : 2026 Theory',
      ' Kamal Perera  Sir - Wednesday - 10:00 AM to 11:00 AM : 2025 Revision',
      ' Kamal Perera Sir - Monday - 9:00 AM to 10:00 AM : 2026 Theory',
      ' Kamal Perera  Sir - Wednesday - 10:00 AM to 11:00 AM : 2025 Revision',
      ' Kamal Perera  Sir - Friday - 8:00 AM to 9:00 AM : 2025 Paper Discussion'
    ],
     Economics: [
      ' Sunil Silva Sir - Monday - 9:00 AM to 10:00 AM : 2026 Theory',
      ' Sunil Silva Sir - Wednesday - 10:00 AM to 11:00 AM : 2025 Revision',
      ' Sunil Silva Sir - Monday - 9:00 AM to 10:00 AM : 2026 Theory',
      ' Sunil Silva Sir - Wednesday - 10:00 AM to 11:00 AM : 2025 Revision',
      ' Sunil Silva Sir - Friday - 8:00 AM to 9:00 AM : 2025 Paper Discussion'
    ],
     Accounting: [
      ' Jayani Silva Sir - Monday - 9:00 AM to 10:00 AM : 2026 Theory',
      ' Jayani Silva  Sir - Wednesday - 10:00 AM to 11:00 AM : 2025 Revision',
      ' Jayani Silva Sir - Friday - 8:00 AM to 9:00 AM : 2025 Paper Discussion'
    ],
     Geography: [
      ' Kasun Nilaweera Sir - Monday - 9:00 AM to 10:00 AM : 2026 Theory',
      ' Kasun Nilaweera Sir - Wednesday - 10:00 AM to 11:00 AM : 2025 Revision',
      ' Kasun Nilaweera Sir - Friday - 8:00 AM to 9:00 AM : 2025 Paper Discussion'
    ],
     Chemistry: [
      ' Nimali Weerasinghe Mis - Monday - 9:00 AM to 10:00 AM : 2026 Theory',
      ' Jeetha samarasinghe Mis - Wednesday - 10:00 AM to 11:00 AM : 2025 Revision',
      ' Nimali Weerasinghe Mis - Monday - 9:00 AM to 10:00 AM : 2026 Theory',
      ' Jeetha samarasinghe Mis - Wednesday - 10:00 AM to 11:00 AM : 2025 Revision',
      ' Nimali Weerasinghe Mis - Friday - 8:00 AM to 9:00 AM : 2025 Paper Discussion'
    ]
  };

  selectedSubject: string = '';
  selectedTimetable: string[] = [];

  selectSubject(subject: string) {
    this.selectedSubject = subject;
    this.selectedTimetable = this.timetables[subject] || [];
  }
}
