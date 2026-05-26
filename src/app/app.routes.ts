import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'students-list',
    loadChildren: () => import('../Students/student.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: 'students-list',
  },
];
