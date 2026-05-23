import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'students',
    loadChildren: () => import('../Students/student.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: 'students',
  },
];
