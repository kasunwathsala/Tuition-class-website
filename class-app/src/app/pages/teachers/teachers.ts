import { Component, OnInit, Inject } from '@angular/core';
import { TeacherService } from './teachers.service'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.html', // Make sure this file exists in the same folder as this TypeScript file
  styleUrls: ['./teachers.css'],
  providers: [TeacherService] ,
   imports: [CommonModule, FormsModule]// Add this line if TeacherService is not provided in a higher module
})
export class TeachersComponent implements OnInit {
  allTeachers: any[] = [];
  filteredTeachers: any[] = [];
   searchValue: string = '';

  constructor(@Inject(TeacherService) private teacherService: TeacherService) {}

  ngOnInit() {
    this.allTeachers = this.teacherService.getTeachers();
    this.filteredTeachers = this.allTeachers;
  }

  onSearch(query: string) {
    this.filteredTeachers = this.teacherService.searchTeachers(query);
  }
}

