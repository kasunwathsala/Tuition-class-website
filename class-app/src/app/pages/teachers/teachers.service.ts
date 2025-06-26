import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private teachers = [
    { name: 'Mr. Kasun Nilaweera', subject: 'MATHS', image: 'assets/kasun1.jpg' },
    { name: 'Mr. Amal jayasinghe', subject: '2026 Theory', image: 'assets/amal.jpg' },
    { name: 'Ms. jayani silva', subject: 'Mathematics', image: 'assets/jayani.jpg' },
    { name: 'Mr. Sunil Silva', subject: 'Science', image: 'assets/sunil.jpg' },
    { name: 'Mr. Kamal Perera', subject: 'English', image: 'assets/kamal.png' },
    { name: 'Ms. Jayan Jyasena', subject: 'Biology', image: 'assets/jayan.jpg' },
    { name: 'Mr. Pawani Rajasinghe', subject: 'ICT', image: 'assets/pawani.jpg' },
    { name: 'Ms. Nimali Weerasinghe', subject: 'History', image: 'assets/nimali.jpg' },
    { name: 'Mr. Sanath Jayasuriya', subject: 'Physics', image: 'assets/sanath.jpg' },
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
