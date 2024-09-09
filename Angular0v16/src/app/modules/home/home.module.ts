import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './components/home/home-routing.module';
import { NavbarComponent, TableComponent } from 'src/app/components';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarComponent,
    TableComponent
  ]
})
export class HomeModule { }
