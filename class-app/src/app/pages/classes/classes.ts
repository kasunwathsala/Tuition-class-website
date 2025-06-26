import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classes.html',
  styleUrls: ['./classes.css']
})
export class Classes {

    subjects = [
    { name: 'Physics', description: 'Learn about motion, energy, and the universe.' },
    { name: 'Chemistry', description: 'Understand molecules and chemical reactions.' },
    { name: 'Biology', description: 'Study life, cells, and ecosystems.' },
    { name: 'Mathematics', description: 'Master algebra, geometry, and calculus.' },
    { name: 'ICT', description: 'Explore information and communication technology.' },
    { name: 'Economics', description: 'Learn about markets and economic systems.' },
    { name: 'Accounting', description: 'Track and manage financial records.' },
    { name: 'English Literature', description: 'Read and analyze great literary works.' },
    { name: 'Geography', description: 'Discover the Earth and its landscapes.' },
    { name: 'History', description: 'Understand past events and civilizations.' }
  ];

  constructor(private router: Router) {

  }

  seeTeachers() {
    this.router.navigate(['/teachers']);
  }


}


