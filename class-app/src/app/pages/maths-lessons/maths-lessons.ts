import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-maths-lessons',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './maths-lessons.html',
  styleUrls: ['./maths-lessons.css']
})
export class MathsLessonsComponent {
  lessons = [
    {
      name: 'Algebra Basics',
      description: 'Learn about variables, equations, and expressions.',
      price: 12.5
    },
    {
      name: 'Geometry Foundations',
      description: 'Understand angles, lines, and shapes in geometry.',
      price: 15.0
    },
    {
      name: 'Trigonometry Intro',
      description: 'Introduction to sine, cosine, and tangent.',
      price: 18.75
    },
    {
      name: 'Calculus I',
      description: 'Basics of differentiation and integration.',
      price: 25.0
    },
    {
      name: 'Probability & Statistics',
      description: 'Understanding probability and data analysis.',
      price: 20.0
    },
    {
      name: 'Probability & Statistics',
      description: 'Understanding probability and data analysis.',
      price: 20.0
    }
  ];

  buyLesson(lessonName: string) {
    alert(`You selected to buy "${lessonName}"`);
  }
}
