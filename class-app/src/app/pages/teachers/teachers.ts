import { Component, OnInit, Inject } from '@angular/core';
import { TeacherService } from './teachers.service'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // ✅ Router import kala

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.html',
  styleUrls: ['./teachers.css'],
  providers: [TeacherService],
  imports: [CommonModule, FormsModule]
})
export class TeachersComponent implements OnInit {

  allTeachers: any[] = [];
  filteredTeachers: any[] = [];
  searchValue: string = '';

  
  constructor(
    @Inject(TeacherService) private teacherService: TeacherService,
    private router: Router
  ) {}

  ngOnInit() {
    this.allTeachers = this.teacherService.getTeachers();
    this.filteredTeachers = this.allTeachers;
  }

  onSearch(query: string) {
    this.filteredTeachers = this.teacherService.searchTeachers(query);
  }

  
   
}