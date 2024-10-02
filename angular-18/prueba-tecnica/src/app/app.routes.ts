import { Routes } from '@angular/router';

import path from 'path';
import { PageNotFoundComponent } from './main-container';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
  },

  {
    path: 'characters',
    loadComponent: () =>
      import('./main-container/main-container.component').then(
        (m) => m.MainContainerComponent
      ),
  },
  {
    path: 'add-edit-characters',
    loadComponent: () =>
      import(
        './main-container/components/add-edit-component/add-edit-component.component'
      ).then((m) => m.AddEditComponent),
  },
  {
    path: 'add-edit-characters/:id',
    loadComponent: () =>
      import(
        './main-container/components/add-edit-component/add-edit-component.component'
      ).then((m) => m.AddEditComponent),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
