import { Component } from '@angular/core';
import { Student } from '../../Students/Models/Student-Contants';
import { StudentService } from '../../Students/Services/student-service';

@Component({
  selector: 'app-student-view-component',
  imports: [],
  templateUrl: './student-view-component.html',
  styleUrl: './student-view-component.css',
})
export class StudentViewComponent {
  selectedStudent: Student | null = null;
  students: Student[] = [];
  error = '';

  constructor(private studentService: StudentService) {}

  selectStudent(id: number): void {
    this.studentService.getStudentById(id).subscribe({
      next: (data) => (this.selectedStudent = data),
      error: (err) => ((this.error = 'Student not found.'), console.error(err)),
    });
  }
}
