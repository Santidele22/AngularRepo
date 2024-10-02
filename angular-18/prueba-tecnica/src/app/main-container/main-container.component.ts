import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalStare } from '@app/store/global.store';
import { CardComponent } from './components/card-components/card-components.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [CardComponent, RouterLink],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContainerComponent {
  readonly store = inject(GlobalStare);
}
