import { Component } from '@angular/core';
import { Student } from '../../Models/Student-Contants';
import { NgFor, NgIf } from '@angular/common';
import { StudentService } from '../../Services/student-service';

@Component({
  selector: 'app-student-component',
  imports: [NgIf, NgFor],
  templateUrl: './student-component.html',
  styleUrl: './student-component.css',
})
export class StudentComponent {
  students: Student[] = [];
  selectedStudent: Student | null = null;
  loading = false;
  error = '';

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.loading = true;
    this.studentService.getAllStudents().subscribe({
      next: (data) => {
        this.students = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Could not connect to API. Is it running?';
        this.loading = false;
      },
    });
  }

  selectStudent(id: number): void {
    this.studentService.getStudentById(id).subscribe({
      next: (data) => (this.selectedStudent = data),
      error: (err) => ((this.error = 'Student not found.'), console.error(err)),
    });
  }

  clearSelection() {
    this.selectedStudent = null;
  }

  async navigateToDetail(id: number): Promise<void> {
    this.selectStudent(id);
  }
}
