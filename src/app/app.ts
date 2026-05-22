import { Component, signal } from '@angular/core';
import { StudentComponent } from '../Students/Components/student-component/student-component';

@Component({
  selector: 'app-root',
  imports: [StudentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('StudentWebApp');
}
