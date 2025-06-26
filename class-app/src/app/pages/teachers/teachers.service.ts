import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private teachers = [
    { name: 'Mr. Kasun Nilaweera', subject: 'Mathematics', image: 'assets/kasun1.jpg' },
    { name: 'Mr. Amal jayasinghe', subject: 'Biology', image: 'assets/amal.jpg' },
    { name: 'Ms. jayani silva', subject: 'Accounting', image: 'assets/jayani.jpg' },
    { name: 'Mr. Sunil Silva', subject: 'Economics', image: 'assets/sunil.jpg' },
    { name: 'Mr. Kamal Perera', subject: 'English', image: 'assets/kamal.png' },
    { name: 'Ms. Jayan Jyasena', subject: 'History', image: 'assets/jayan.jpg' },
    { name: 'Mr. Pawani Rajasinghe', subject: 'ICT', image: 'assets/pawani.jpg' },
    { name: 'Ms. Nimali Weerasinghe', subject: 'Chemistry', image: 'assets/nimali.jpg' },
    { name: 'Mr. Sanath Jayasuriya', subject: 'Biology', image: 'assets/sanath.jpg' },
    { name: 'Ms. Jeetha Samaranyake', subject: 'Chemistry', image: 'assets/geetha.jpeg' }
  ];

  getTeachers() {
    return this.teachers;
  }

  searchTeachers(query: string) {
    return this.teachers.filter(t =>
      t.name.toLowerCase().includes(query.toLowerCase()) ||
      t.subject.toLowerCase().includes(query.toLowerCase())
    );
  }
}
