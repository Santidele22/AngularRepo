import {
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
} from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgTemplateOutlet,
    NgStyle,
    NgClass,
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'clase-6';
  condition = false;
  arreglo = ['Hola', 'usuario'];
  selectedOptions = 'dos';
  options = ['uno', 'dos', 'tres'];
  handleclick = () =>
    !this.condition ? (this.condition = true) : (this.condition = false);
}
