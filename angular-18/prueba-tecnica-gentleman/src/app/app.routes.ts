import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/characters',
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
    path: 'add-edit-character',
    loadComponent: () =>
      import(
        './main-container/components/characteraddeditcomponent/characteraddeditcomponent.component'
      ).then((m) => m.CharacteraddeditcomponentComponent),
  },
  {
    path: 'add-edit-character/:id',
    loadComponent: () =>
      import(
        './main-container/components/characteraddeditcomponent/characteraddeditcomponent.component'
      ).then((m) => m.CharacteraddeditcomponentComponent),
  },
];
