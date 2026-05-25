import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../Students/Models/Student-Contants';
import { StudentService } from '../../Students/Services/student-service';

@Component({
  selector: 'app-student-view-component',
  imports: [],
  templateUrl: './student-view-component.html',
  styleUrl: './student-view-component.css',
})
export class StudentViewComponent implements OnInit {
  selectedStudent: Student | null = null;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : NaN;

    if (Number.isNaN(id)) {
      this.error = 'Invalid student id.';
      return;
    }

    this.studentService.getStudentById(id).subscribe({
      next: (data) => {
        this.selectedStudent = data;
      },
      error: (err) => {
        this.error = 'Student not found.';
        console.error(err);
      },
    });
  }

  async closeView(): Promise<void> {
    await this.router.navigate(['/students']);
  }
}
