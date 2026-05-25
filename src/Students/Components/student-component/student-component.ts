import { Component, inject } from '@angular/core';
import { Student } from '../../Models/Student-Contants';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { StudentService } from '../../Services/student-service';

@Component({
  selector: 'app-student-component',
  imports: [NgIf, NgFor],
  templateUrl: './student-component.html',
  styleUrl: './student-component.css',
})
export class StudentComponent {
  private router = inject(Router);
  private studentService = inject(StudentService);

  students: Student[] = [];
  loading = false;
  error = '';

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

  async viewStudent(id: number): Promise<void> {
    await this.router.navigate(['/students', 'view', id]);
  }
}
