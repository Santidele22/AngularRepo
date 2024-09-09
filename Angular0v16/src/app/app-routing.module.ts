import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//loadChildren is for lazy loading
const routes: Routes = [
  {
    path : '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./modules').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
