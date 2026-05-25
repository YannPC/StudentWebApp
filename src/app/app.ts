import { Component, signal } from '@angular/core';
import { StudentComponent } from '../Students/Components/student-component/student-component';
import { StudentViewComponent } from '../Students-view/student-view-component/student-view-component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('StudentWebApp');
}
