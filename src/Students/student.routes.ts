import { Routes } from '@angular/router';
import { StudentComponent } from './Components/student-component/student-component';
import { StudentViewComponent } from '../Students-view/student-view-component/student-view-component';

export const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
  },
  {
    path: 'view',
    component: StudentViewComponent,
  },
];
