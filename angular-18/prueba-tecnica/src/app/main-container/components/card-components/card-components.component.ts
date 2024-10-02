import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Characters } from '@app/models';
import { GlobalStare } from '@app/store';

@Component({
  selector: 'app-card-components',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './card-components.component.html',
  styleUrl: './card-components.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  character = input.required<Characters>();
  readonly store = inject(GlobalStare);

  removeCharacter = (id: number) => this.store.removeCharacter(id);
}
