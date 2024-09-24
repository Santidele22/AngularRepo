import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContainerComponent, NavbarComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainContainerComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'new app perra';
}
