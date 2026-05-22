import { Component } from '@angular/core';
import { Student } from '../../Models/Student-Contants';

@Component({
  selector: 'app-student-component',
  imports: [],
  templateUrl: './student-component.html',
  styleUrl: './student-component.css',
})
export class StudentComponent {
  students: Student[] = [];
  selectedStudent: Student | null = null;
  loading = false;
  error = '';
}
