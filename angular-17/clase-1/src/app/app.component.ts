import { afterNextRender, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncComponentComponent } from './components/async-component/async-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'clase-1';

  constructor() {
    //afterNextRender is ideal for performing one-time initializations, such as integrating third-party libraries or utilizing browser-specific APIs:
    afterNextRender(() => {
      console.log(window.location.pathname);
    });
  }
}
