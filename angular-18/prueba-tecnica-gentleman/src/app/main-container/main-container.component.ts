import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalStore } from '@app/store';
import { CardContainerComponent } from './components/card-container/card-container.component';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [CardContainerComponent, RouterLink],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContainerComponent {
  readonly store = inject(GlobalStore);
}
