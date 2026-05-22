import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'students',
    loadComponent: () =>
      import('../Students/Components/student-component/student-component').then(
        (m) => m.StudentComponent,
      ),
    redirectTo: 'students',
    pathMatch: 'full',
  },
];
